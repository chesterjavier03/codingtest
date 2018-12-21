function formatInTitleCase(text) {
  try {
    return text != null ? text.replace(/\w\S*/g, function (text) {
      return text.charAt(0).toUpperCase() + text.slice(1)
    }) : null;
  } catch (e) {
    throw('Given a non-string: ' + text);
  }
}

module.exports = formatInTitleCase;
