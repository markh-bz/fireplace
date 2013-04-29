(function() {
  var conn = navigator.mozMobileConnection;
  console.log('navigator.mozMobileConnection:', JSON.stringify(conn));
  if (!conn) {
    document.querySelector('dl').innerHTML = '<dt>Unavailable</dt><dd></dd>';
    return;
  }
  var output = [];
  output.push('<dt>cardState</dt><dd>' + conn.cardState + '</dd>');
  output.push('<dt>data</dt><dd>' + conn.data + '</dd>');
  output.push('<dt>iccInfo.mcc</dt><dd>' + conn.iccInfo.mcc + '</dd>');
  output.push('<dt>iccInfo.mnc</dt><dd>' + conn.iccInfo.mnc + '</dd>');
  output.push('<dt>iccInfo.iccid</dt><dd>' + conn.iccInfo.iccid + '</dd>');
  output.push('<dt>voice.cell.gsmLocationAreaCode</dt><dd>' + conn.voice.cell.gsmLocationAreaCode + '</dd>');
  output.push('<dt>voice.cell.gsmCellId</dt><dd>' + conn.voice.cell.gsmCellId + '</dd>');
  output.push('<dt>voice.connected</dt><dd>' + conn.voice.connected + '</dd>');
  output.push('<dt>voice.emergencyCallsOnly</dt><dd>' + conn.voice.emergencyCallsOnly + '</dd>');
  document.querySelector('dl').innerHTML = output;
})();
