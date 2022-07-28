//part a
console.log('Part a: ')
const peter = {
  firstName: 'Peter',
  lastName: 'Smith',
  birthYear: 1990,
  jobTitle: 'student',
  score: [100, 99, 90, 96],
  calAvgScore: function() {
    this.avgScore = (this.score[0] + this.score[1] + this.score[2] + this.score[3]) / this.score.length;
    return this.avgScore;
  },
  FindHighestScore: function() {
    for (let i = 0; i < this.score.length; i++) {
      if (this.score[0] < this.score[i + 1])
        this.score[0] = this.score[i + 1]
    }
    return this.score[0];
  },
  showsummary: function() {
    return this.firstName + ' ' + this.lastName + ' has completed ' + this.score.length +
      'tasks and ' + this.firstName + 's average score is ' + this.calAvgScore() + ' ' +
      this.firstName + 's highest score is ' + this.FindHighestScore();
  }
}
console.log(peter.showsummary());
// part 2
console.log('Part b: ')
ConvertcelsiusToFarenheit = (celsius) => {
  return celsius * (9 / 5) + 32;
};
var celsius = 50;
while (isNaN(celsius) || celsius < -88 || celsius > 58) {
  alert("This isn't within the range. Please try again");
  celsius = prompt("Please enter a celsius degree value between -88 and 58.");
}
console.log(`With your celsius input of ${celsius}, it converts to ${ConvertcelsiusToFarenheit(celsius).toFixed(2)} degrees farenheit.`);

var modals = document.getElementsByClassName("modal");
var modalOpenBtn = document.getElementsByClassName("modalOpenBtn");
var currentModal = null;

function openModal(id) {
  for (i = 0; i < modals.length; i++) {
    if (modals[i].getAttribute('id') == id) {
      currentModal = modals[i];
      currentModal.style.display = "block";
      break;
    }
  }
}
modalOpenBtn.onclick = function() {
  let currentID = modalOpenBtn.getAttribute('id');
  openModal(currentID);
}
window.onclick = function(event) {
  if (event.target == currentModal || event.target.getAttribute('class') == 'modalClose') {
    currentModal.style.display = "none";
  }
}
if (document.images) {
  var image1 = new Image();
  image1.src = "facebook.gif";
  var image2 = new Image();
  image2.src = "meta.gif";
}
