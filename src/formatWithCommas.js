function formatWithCommas(strings, word) {
  let remove = strings.splice(-2, 2);
  strings.push(remove.join(' ' + word + ' '));
  return strings.join(', ');
}

module.exports = formatWithCommas;
