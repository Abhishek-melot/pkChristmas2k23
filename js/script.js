// Modal code.

const modal = document.getElementById("modal");

function showDialog() {
  // document.body.style.overflow="hidden"
  modal.showModal();
}

function closeDialog() {
  modal.close();
  // document.body.style.overflow="auto"
}

// User and talent tabs switching code.

const tabs = document.querySelectorAll(".tab-btns > button");
let content = document.querySelectorAll(".tab-content");
console.log(tabs);
tabs.forEach((tab, i) => {
  console.log(tab);
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("active");
    });

    content.forEach((c, ci) => {
      if (i === ci) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });
    tab.classList.add("active");
  });
});

// Reward Round button switching

const roundBtns = document.querySelectorAll(".reward-round-btns button");
const talentRewards = document.querySelectorAll(".talent-rewards");
console.log(roundBtns);
roundBtns.forEach((tab, i) => {
  console.log(tab);
  tab.addEventListener("click", () => {
    roundBtns.forEach((t) => {
      t.classList.remove("active");
    });

    talentRewards.forEach((c, ci) => {
      if (i === ci) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });
    tab.classList.add("active");
  });
});

// User rewards

let rewardData = [
  "User receives 25% of total beans pot",
  "User receives 20% of total beans pot",
  "User receives 15% of total beans pot",
  "User receives 10% of total beans pot",
  "User receives 5% of total beans pot ",
];
let ranks = ["TOP 1", "TOP 2", "TOP 3", "TOP 4", "TOP 5-10"];

let leftArrow = document.querySelector(".left");
let rightArrow = document.querySelector(".right");
let rewardText = document.querySelector(".reward-text");

let prizes = document.querySelectorAll(".prizes-1");
let rewardContainer = document.querySelector(".rewards");
let currentId = +rewardContainer.getAttribute("data-current");
let rank = document.querySelector(".reward-top span");
console.log(currentId);

console.log(prizes);
rightArrow.addEventListener("click", () => {
  let currentPrize = document.querySelector(".prizes-1.active");
  let rank = document.querySelector(".reward-top span");
  if (
    currentPrize.nextElementSibling &&
    currentPrize.nextElementSibling.classList.contains("prizes-1")
  ) {
    console.log(currentPrize.nextElementSibling);
    currentPrize.nextElementSibling.classList.add("active");
    currentId += 1;
    rank.innerHTML = ranks[currentId];
  } else {
    prizes[0].classList.add("active");
    currentId = 0;
    rank.innerHTML = ranks[currentId];
  }
  currentPrize.classList.remove("active");
  rewardContainer.setAttribute("data-current", currentId);
  rewardText.innerHTML = rewardData[currentId];
});

console.log(prizes.length);

leftArrow.addEventListener("click", () => {
  let currentPrize = document.querySelector(".prizes-1.active");

  if (
    currentPrize.previousElementSibling &&
    currentPrize.previousElementSibling.classList.contains("prizes-1")
  ) {
    console.log(currentPrize.previousElementSibling);
    currentPrize.previousElementSibling.classList.add("active");
    currentId -= 1;
    rank.innerHTML = ranks[currentId];
  } else {
    prizes[prizes.length - 1].classList.add("active");
    currentId = prizes.length - 1;
    rank.innerHTML = ranks[currentId];
    console.log(currentId);
  }
  currentPrize.classList.remove("active");
  rewardContainer.setAttribute("data-current", currentId);
  rewardText.innerHTML = rewardData[currentId];
});

//  Talent Rewards Round-1

const TalentRewardR1 = [
  "10 Days Audio Room theme + Profile Frame",
  "5 Days Audio Room theme ",
  "3 Days Audio Room theme ",
  "1 Days Audio Room theme ",
];

const TalentRanks1 = [
  "05 Million & Above Gems ",
  "03 - 05 Million Gems  ",
  "01 - 03 Million Gems  ",
  "500K – 1 Million Gems ",
];

let prizesR1 = document.querySelectorAll(".prizesR1");
let leftArrow1 = document.querySelector(".left-1 ");
let rightArrow1 = document.querySelector(".right-1 ");
let rewardText1 = document.querySelector(".reward-text-1");
let rewardContainer1 = document.querySelector(".r1");
let currentId1 = +rewardContainer1.getAttribute("data-current");
let rank1 = document.querySelector(".reward-top1 span");
console.log(prizesR1)

rightArrow1.addEventListener("click", () => {
  let currentPrize = document.querySelector(".prizesR1.active");
  
  if (
    currentPrize.nextElementSibling &&
    currentPrize.nextElementSibling.classList.contains("prizesR1")
  ) {
    console.log(currentPrize.nextElementSibling);
    currentPrize.nextElementSibling.classList.add("active");
    currentId1 += 1;
    rank1.innerHTML = TalentRanks1[currentId1];
  } else {
    prizesR1[0].classList.add("active");
    currentId1 = 0;
    rank1.innerHTML = TalentRanks1[currentId1];
  }
  currentPrize.classList.remove("active");
  rewardContainer1.setAttribute("data-current", currentId1);
  rewardText1.innerHTML = TalentRewardR1[currentId1];
});

console.log(prizesR1.length);

leftArrow1.addEventListener("click", () => {
  let currentPrize = document.querySelector(".prizesR1.active");

  if (
    currentPrize.previousElementSibling &&
    currentPrize.previousElementSibling.classList.contains("prizesR1")
  ) {
    console.log(currentPrize.previousElementSibling);
    currentPrize.previousElementSibling.classList.add("active");
    currentId1 -= 1;
    rank1.innerHTML = TalentRanks1[currentId1];
  } else {
    prizesR1[prizesR1.length - 1].classList.add("active");
    currentId1 = prizesR1.length - 1;
    rank1.innerHTML = TalentRanks1[currentId1];
    console.log(currentId1);
  }
  currentPrize.classList.remove("active");
  rewardContainer1.setAttribute("data-current", currentId1);
  rewardText1.innerHTML = TalentRewardR1[currentId1];
});






// Talent Rewards Round-2
const TalentRewardR2 = [
  "15 days PK SUPER STAR BADGE + Audio theme of PK SuperStar + PK SUperStar Profile Frame",
  "10 days Audio theme of PK SuperStar + <br/> PK SUperStar Profile Frame",
  "07 days Audio theme of PK SuperStar ",
  "5 days Audio theme of PK SuperStar ",
];
const TalentRanks2 = [
  "10 Million & Above Gems  ",
  "05- 10 Million Gems",
  "03- 05 Million Gems",
  "01- 03 Million Gems",
];

let prizesR2 = document.querySelectorAll(".prizesR2");
let leftArrow2 = document.querySelector(".left-2 ");
let rightArrow2 = document.querySelector(".right-2 ");
let rewardText2 = document.querySelector(".reward-text-2");
let rewardContainer2 = document.querySelector(".r2");
let currentId2 = +rewardContainer2.getAttribute("data-current");
let rank2 = document.querySelector(".reward-top2 span");
console.log(prizesR2)

rightArrow2.addEventListener("click", () => {
  let currentPrize = document.querySelector(".prizesR2.active");
  
  if (
    currentPrize.nextElementSibling &&
    currentPrize.nextElementSibling.classList.contains("prizesR2")
  ) {
    console.log(currentPrize.nextElementSibling);
    currentPrize.nextElementSibling.classList.add("active");
    currentId2 += 1;
    rank2.innerHTML = TalentRanks2[currentId2];
  } else {
    prizesR2[0].classList.add("active");
    currentId2 = 0;
    rank2.innerHTML = TalentRanks2[currentId2];
  }
  currentPrize.classList.remove("active");
  rewardContainer2.setAttribute("data-current", currentId2);
  rewardText2.innerHTML = TalentRewardR2[currentId2];
});

console.log(prizesR2.length);

leftArrow2.addEventListener("click", () => {
  let currentPrize = document.querySelector(".prizesR2.active");

  if (
    currentPrize.previousElementSibling &&
    currentPrize.previousElementSibling.classList.contains("prizesR2")
  ) {
    console.log(currentPrize.previousElementSibling);
    currentPrize.previousElementSibling.classList.add("active");
    currentId2 -= 1;
    rank2.innerHTML = TalentRanks2[currentId2];
  } else {
    prizesR2[prizesR2.length - 1].classList.add("active");
    currentId2 = prizesR2.length - 1;
    rank2.innerHTML = TalentRanks2[currentId2];
    console.log(currentId2);
  }
  currentPrize.classList.remove("active");
  rewardContainer2.setAttribute("data-current", currentId2);
  rewardText2.innerHTML = TalentRewardR2[currentId2];
});


// Schedule Round buttons

const roundBtns2 = document.querySelectorAll(".schedule-round-btns button");
const talentRewards2 = document.querySelectorAll(".talent-rewards2");
console.log(roundBtns);
roundBtns2.forEach((tab, i) => {
  console.log(tab);
  tab.addEventListener("click", () => {
    roundBtns2.forEach((t) => {
      t.classList.remove("active");
    });

    talentRewards2.forEach((c, ci) => {
      if (i === ci) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });
    tab.classList.add("active");
  });
});


// Schedule content

const tabs1 = document.querySelectorAll(" .tab1");
const scontent = document.querySelectorAll(".talent-rewards2 > div");
console.log(scontent);
console.log(tabs1)
tabs1.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    tabs1.forEach((t) => {
      t.classList.remove("active");
    });

    scontent.forEach((c, ci) => {
      if (i === ci) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });

    tab.classList.add("active");
  });
});


const tabs2 = document.querySelectorAll(".tab2");
const scontent2 = document.querySelectorAll(".talent-rewardsR2 > div");
console.log(scontent);
console.log(tabs2)
tabs2.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    tabs2.forEach((t) => {
      t.classList.remove("active");
    });

    scontent2.forEach((c, ci) => {
      if (i === ci) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });

    tab.classList.add("active");
  });
});


// Leaderboard user talent tabs switching.

const tabs3 = document.querySelectorAll(" .tab3");
let lcontent = document.querySelectorAll(".leaderboard-content");
console.log(tabs3);
console.log(lcontent)
tabs3.forEach((tab, i) => {
  console.log(tabs3.length);
  tab.addEventListener("click", () => {
    tabs3.forEach((t) => {
      t.classList.remove("active");
    });

    lcontent.forEach((c, ci) => {
      if (i === ci) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });
    tab.classList.add("active");
  });
});

// Leaderboard rounds btns switching

const roundBtnsL = document.querySelectorAll(".leaderboard-content-user .leaderboard-round-btns button");
const leaderboardContentUser = document.querySelectorAll(".leaderboard-content-user .leaderboard");
console.log(roundBtnsL);
console.log(leaderboardContentUser)
roundBtnsL.forEach((tab, i) => {
  console.log(tab);
  tab.addEventListener("click", () => {
    roundBtnsL.forEach((t) => {
      t.classList.remove("active");
    });

    leaderboardContentUser.forEach((c, ci) => {
      if (i === ci) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });
    tab.classList.add("active");
  });
});

const roundBtnsL1 = document.querySelectorAll(".leaderboard-content-talent .leaderboard-round-btns button");
const leaderboardContentTalent = document.querySelectorAll(".leaderboard-content-talent .leaderboard");
console.log(roundBtnsL1);
console.log(leaderboardContentTalent);
roundBtnsL1.forEach((tab, i) => {
  console.log(tab);
  tab.addEventListener("click", () => {
    roundBtnsL1.forEach((t) => {
      t.classList.remove("active");
    });

    leaderboardContentTalent.forEach((c, ci) => {
      if (i === ci) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });
    tab.classList.add("active");
  });
});

// Fetching schedule data from spreadsheet.

let SHEET_ID = "1GoCTAdP_gpgf8vZv0MPGGj2GFGUxiCNqpppWBs0C4yQ";
let SHEET_TITLE = "test_event";

let SHEET_RANGE = "A4:C13";

let URL =
  "https://docs.google.com/spreadsheets/d/" +
  SHEET_ID +
  "/gviz/tq?sheet=" +
  SHEET_TITLE +
  "&range=" +
  SHEET_RANGE;

async function fetchSheetData(sheet_range) {
  try {
    const res = await fetch(`${URL}`);
    const data = await res.text();
    return JSON.parse(data.substring(47).slice(0, -2));
  } catch (e) {
    return null;
  }
}



function renderLeaderboardData(data) {
  const top3 = data.rows.slice(0, 3);
  console.log(top3)
  const toppers = document.querySelectorAll(".leaderboard-content-user .l-round1 .topper-container .top");
  console.log(toppers);
  toppers.forEach((topper, i) => {
    
    const current = top3[i].c;
    const name = topper.querySelector(".name");
    const id = topper.querySelector(".id");
    const beans = topper.querySelector(".beans");

    name.innerHTML = current[0].v;
    id.innerHTML = current[1].v;
    beans.innerText = current[2].v || 0;
  });

  const winnerContainer = document.querySelector(".winner-container");
  const winnerStripTemplate = document.querySelector("#winner-strip");
  // const beanImg=document.querySelector(".bean-img");
  for (let i = 3; i < data.rows.length; i++) {
    const current = data.rows[i].c;
    console.log(current);
    const winnerStrip = winnerStripTemplate.content.cloneNode(true);
    const position = winnerStrip.querySelector(".position");
    
    position.innerHTML = i + 1;

    const name = winnerStrip.querySelector(".name");
    name.innerHTML = current[0].v;

    const id = winnerStrip.querySelector(".id");
    id.innerHTML = current[1].v;

    // beanImg.src=

    const beans = winnerStrip.querySelector(".beans");
    beans.innerHTML = current[2].v || 0;
    winnerContainer.appendChild(winnerStrip);
  }
}

async function init() {
  // const data = await fetchSheetData(SHEET_RANGE);
  // console.log(data);
  // renderScheduleData(data.table);
  const leaderboardData = await fetchSheetData("A18:C27");
  console.log(leaderboardData.table)
  renderLeaderboardData(leaderboardData.table);
}

init();