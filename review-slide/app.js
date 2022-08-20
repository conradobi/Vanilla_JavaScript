const container = document.getElementById('container')
const reviewImg = document.getElementById('reviewimg')
const reviewName = document.getElementById('reviewname')
const reviewJob = document.getElementById('reviewjob')
const reviewMsg = document.getElementById('reviewmsg')
const prevBtn = document.getElementById('previous')
const randomBtn = document.getElementById('random')
const nextBtn = document.getElementById('next')

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "./img/1.png",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "./img/2.png",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "./img/3.png",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Conrad Obi",
    job: "Software Engineer",
    img:
      "./img/4.png",
    text:
      "Conrad is a Software Engineer put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const body = document.body
body.addEventListener('load', function() {
    // reviewImg.src = reviews[3].img
    reviewName.textContent = review[3].name
    reviewJob.text = review[3].job
    reviewMsg.textContent = review[3].text

})
revCount = 0
nextBtn.addEventListener('click', function() {
    revCount++
    changeRev(revCount)
    if(revCount > reviews.length){
        revCount = 0
    }
})
prevBtn.addEventListener('click', function() {
    revCount--
    if(revCount < 0){
        revCount = rev.length - 1
    }
    changeRev()
})

const changeRev = (x) => {
    reviewImg.src = reviews[x].img
    reviewName.textContent = reviews[x].name
    reviewJob.textContent = reviews[x].job
    reviewMsg.textContent = reviews[x].text
}

randomBtn.addEventListener('click', function(){
    const randomN = Math.floor(Math.random() * reviews.length)
    changeRev(randomN)
})