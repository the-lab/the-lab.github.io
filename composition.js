var displayComposition = function(molecule) {
  $("#currentview").text("Currently viewing:");
  $("#image").text("");
  if (molecule == "salt") {
    var text = " <b>Table salt</b>";
    $("#image").prepend("<img src='salt.png'>");
  } else if (molecule == "water") {
    var text = " <b>Water</b>";
    $("#image").prepend("<img src='water.png'>");
  } else if (molecule == "co2") {
    var text = " <b>Carbon dioxide</b>";
    $("#image").prepend("<img src='co2.png'>");
  } else if (molecule == "oxygen") {
    var text = " <b>Oxygen</b>";
    $("#image").prepend("<img src='oxygen.png'>");
  } else {
    var text = " <b>Deoxyribonucleic acid</b>";
    $("#image").prepend("<img src='dna.png'>");
  }
  $("#currentview").append(text);
};