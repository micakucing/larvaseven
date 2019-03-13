import * as React from 'react';
// statics handler
import hoistStatics from 'hoist-non-react-statics';
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

let language = 'pt';
let id = 0;
let subscribes = {};

let translations = {};

export function subscribe(cb) {
  const newId = id;
  subscribes[newId] = cb;
  id += 1;
  return newId;
}

export function unsubscribe(id) {
  delete subscribes[id];
}

function triggerSubscriptions() {
  Object.keys(subscribes).forEach(id => {
    new Promise((resolve, reject) => {
      subscribes[id]();
      resolve();
    }).then();
  });
}

export function setDefaultLanguage(lang) {
  language = lang;
}

export function setDefaultTranslations(userTranslations) {
  if (Object.keys(translations).length !== 0) {
    setTranslations(userTranslations);
    return;
  }
  translations = userTranslations;
}

export function setTranslations(userTranslations) {
  translations = userTranslations;
  triggerSubscriptions();
}

export function setLanguage(lang) {
  language = lang;
  triggerSubscriptions();
}

export function getLanguage() {
  return language;
}

export function t(path, args) {
  const translationKeys = path.split('.');
  let translation = '';
  let translationObj = translations[language];

  translationKeys.forEach(key => {
    const temp = translationObj[key];
    if (typeof translationObj[key] === 'object') {
      translationObj = translationObj[key];
    }
    if (typeof temp === 'string') {
      translation = temp;
    }
  });

  if (translation) {
    if (args) {
      Object.keys(args).forEach(key => {
        translation = translation.replace(`{${key}}`, args ? args[key] : '');
      });
    }
  } else {
    return path;
  }

  return translation;
}

export function translate(Component) {
  class TranslatedComponet extends React.Component {

    componentDidMount() {
      this.id = subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
      unsubscribe(this.id);
    }

    render() {
      return React.createElement(Component, _extends({}, this.props, { t: t }));
    }
  }

  return hoistStatics(TranslatedComponet, Component);
}

export default {
  setDefaultLanguage,
  setLanguage,
  setDefaultTranslations,
  setTranslations,
  translate,
  subscribe,
  unsubscribe,
  t
};