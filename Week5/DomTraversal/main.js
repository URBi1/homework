
let computerIDs = { cmp_id: [] };

$('button').on('click', function() {
  let buttonType = $(this).attr('class');
  let computerDiv = $(this).closest('.computer');

  if (buttonType === "generator") {
    let processorId = computerDiv.find('.processor').attr('id');
    let computerId = computerDiv.attr('data-id');
    let busNumber = computerDiv.find('.BUS').text();

    console.log('Processor ID: ' + processorId);
    console.log("Computer's data-id: " + computerId);
    console.log('BUS: ' + busNumber);

    computerIDs.cmp_id.push(computerId);
  } 
  else if (buttonType === "validator") {
    let generatorText = computerDiv.find('.generator').text();
    let mb = computerDiv.find('.MB').text();
    let qrElements = computerDiv.find('.QR');
    let qr1 = qrElements.first().text();
    let qr2 = qrElements.last().text();


    console.log('Generator Text: ' + generatorText);
    console.log('MB: ' + mb);
    console.log('QR1: ' + qr1);
    console.log('QR2: ' + qr2);
  }
});
