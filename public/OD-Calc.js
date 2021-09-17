const coreDiameter = 6.625;

function ODtoFootageConverter(event) {

    event.preventDefault();

    const materialThickness = document.querySelector('#OtF-thickness').value.trim();
    const rollOD = document.querySelector('#Otf-OD').value.trim();

    const footageEstimate = ( 1000 * Math.PI * (rollOD**2 - coreDiameter**2) ) / (materialThickness * 12 * 4);

    const roundedEstimate = Math.round(footageEstimate)

    document.querySelector('#OtF-answer').innerHTML = `Roll is approximately ${roundedEstimate} LF`
}

function FootagetoODConverter(event) {

    event.preventDefault();

    const materialThickness = document.querySelector('#FtO-thickness').value.trim();
    const rollFootage = document.querySelector('#FtO-footage').value.trim();

    const footageEstimate = Math.sqrt( ((materialThickness * rollFootage * 12 * 4) / (1000 * Math.PI)) + coreDiameter**2 )

    const roundedEstimate = Math.round(footageEstimate)

    document.querySelector('#FtO-answer').innerHTML = `Roll OD is approximately ${roundedEstimate}"`
}

document.querySelector('#OtF-form').addEventListener('submit', ODtoFootageConverter);
document.querySelector('#FtO-form').addEventListener('submit', FootagetoODConverter);