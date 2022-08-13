import React, { useEffect } from "react";
import Stomp from "stompjs";
import * as actions from "../utils/actions";
import { connect } from "react-redux";
import * as config from "../utils/config";

const CreatedUrl = ({ id, long_url, short_url, clicks, user, changeUrls }) => {
  const server_url = config.url + "/api1/url/";
  const websocket_url = config.websocket_url;
  // const websocket_url = "wss://localhost:8000/ws";
  var sock = new WebSocket(websocket_url);
  let stompClient = Stomp.over(sock);
  const convert = (id) => {
    var l = "";
    for (var i = 0; i < id?.length; i++) {
      if (id[i] !== "-") {
        l = l + id[i];
      }
    }
    l = l.substring(0, l.length);
    return l;
  };

  useEffect(() => {
    stompClient.connect({}, () => {
      stompClient.subscribe(
        "/topic/" + convert(user.id) + "/queue/clicks",
        (url_list) => urls_changed(url_list)
      );
      stompClient.subscribe(
        "/topic/" + convert(user.id) + "/queue/newurl",
        (url_list) => urls_changed(url_list)
      );
    });
  }, []);

  const urls_changed = (data) => {
    if (data.body) {
      const userUrls = JSON.parse(data.body).userUrls;
      changeUrls(userUrls);
    }
  };

  const increment = () => {
    const payload = {
      user_id: convert(user?.id),
      url_id: convert(id),
    };
    stompClient.send("/app/clicks", {}, JSON.stringify(payload));
  };

  return (
    <div className="createdurl">
      <div className="createdurl__info">
        <a
          className="createdurl__info__shortUrl"
          target="_blank"
          href={server_url + short_url}
          onClick={increment}
        >
          {server_url + short_url}
        </a>
        <a
          className="createdurl__info__longUrl"
          target="_blank"
          href={long_url}
        >
          {long_url}
        </a>
      </div>
      <h3 className="createdurl__clicks">{clicks}</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  urls: state.urls,
  jwt: state.jwt,
});

const mapDispatchToProps = (dispatch) => ({
  changeUser: (user) => dispatch({ type: actions.change_user, payload: user }),
  changeUrls: (urls) => dispatch({ type: actions.change_urls, payload: urls }),
  changeJwt: (jwt) => dispatch({ type: actions.change_jwt, payload: jwt }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatedUrl);
