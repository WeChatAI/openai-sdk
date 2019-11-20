import {chat} from "./lib/chat";
import nlp  from  "./lib/nlp";
import {auth}  from  "./lib/auth";
export default {
  init: auth,
  chat: chat,
  nlp: nlp
};

