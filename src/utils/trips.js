import blackfish from '../assets/img/blackfish.jpeg';
import blackfishTC from '../assets/img/blackfishtc.jpeg';
import codfish from '../assets/img/codfish.jpeg';
import wreckFishing from '../assets/img/wreckfishing.jpeg';
import wreckTC from '../assets/img/wrecktc.png';
import wreckTC1 from '../assets/img/wrecktc1.png';
import wreckTC2 from '../assets/img/wrecktc2.png';
import wreckTC3 from '../assets/img/wrecktc3.png';
import seabassTC from '../assets/img/seabassTC.jpeg';
import seabass1 from '../assets/img/seabass1.jpeg';
import seabass2 from '../assets/img/seabass2.jpeg';
import seabass3 from '../assets/img/seabass3.jpeg';
import stripedBassTC from '../assets/img/stripedbasstc.jpeg';
import stripedBass1 from '../assets/img/striped_bass1.jpeg';
import stripedBass2 from '../assets/img/striped_bass2.jpeg';
import flukeTC from '../assets/img/fluketc.jpeg';
import fluke1 from '../assets/img/fluke1.jpeg';
import fluke2 from '../assets/img/fluke2.jpeg';
import magicHour from '../assets/img/magic_hour1.jpeg';
import mixedBag from '../assets/img/mixedBag.jpeg';
import mixedBag1 from '../assets/img/mixedBag1.jpeg';
import sharktc1 from '../assets/img/sharkingtc1.jpeg';
import sharktc2 from '../assets/img/sharkingtc2.jpeg';
import shark from '../assets/img/sharking.jpeg';
import midShore from '../assets/img/midshore.jpeg';
import midShore1 from '../assets/img/midshore1.jpeg';
import midShore2 from '../assets/img/midshore2.jpeg';
import midShore3 from '../assets/img/midshore3.jpeg';
import tunatc1 from '../assets/img/tunatc1.jpeg';
import tunatc2 from '../assets/img/tunatc2.jpeg';
import tunatc3 from '../assets/img/tunatc3.jpeg';
import mahi from '../assets/img/mahi.jpeg';
import mahi1 from '../assets/img/mahi1.jpeg';
import mahi2 from '../assets/img/mahi2.jpeg';
import inshore from '../assets/img/inshore.jpeg';
import inshore1 from '../assets/img/inshore1.jpeg';
import inshore2 from '../assets/img/inshore2.jpeg';
import inshore3 from '../assets/img/inshore3.jpeg';
import dauntless from '../assets/img/dauntless.jpeg';
import dauntless1 from '../assets/img/dauntless1.jpeg';
import dauntless2 from '../assets/img/dauntless2.jpeg';
import bluefishTC from '../assets/img/bluefishtc.jpeg';
import grayTrigger from '../assets/img/gray-triggertc.jpeg';
import porgieTC from '../assets/img/porgietc.jpeg';
import codTC from '../assets/img/codtc.jpeg';
import lingTC from '../assets/img/lingtc.jpeg';
import flounderTC from '../assets/img/floundertc.jpeg';
import pollockTC from '../assets/img/pollocktc.jpeg';
import spanishmacktc from '../assets/img/spanishmacktc.jpeg';
import albacoretc from '../assets/img/albacoretc.jpeg';
import bonitotc from '../assets/img/bonitotc.jpeg';
import fireworks from '../assets/img/fireworks.jpeg'



export const trips = {
    'Blackfish (Tautog) Charter': {
        media: [blackfish],
        description: "Among one of the most popular species to catch at the Jersey Shore, Black fish, a.k.a. Tautog, presents an addicting challenge to all anglers. Blackfish reside in bottom structure that is often rough and snaggable, whether it's rock or wreckage. When you hook a quality blackfish, they often take a hard nose dive to a space within the wreck like their lives depend on it. This fight is what the avid tautog fisherman lives for.  Pound for pound, blackfish put up one of the best fights compared to other species of fish. Blackfish are often slower to bite the hook compared to other species and take more diligence with the rod when blackfish are in season. Knowing when to set the hook is also a crucial part of the battle. Their bait of choice is often crabs which will be provided for all passengers. We will put you on the productive grounds, the rest is up to the fish and the fishermen. Blackfish charters are available in April and again from Mid-November through the entire month of January. Give this challenge a try!",
        tripTimes: ["6:00am-2:30pm","7:30am-4:00pm"],
        tripDuration: {
            time: '8.5h',
            maxOccupants: 6
        },
        price: {
            deposit: 200,
            balance: 800
        },
        details:'Bring your own Jigs; Clam and Green Crabs provided; White leggers provided when available;',
        targetCatch:[blackfishTC],
        calendarTitle: ['Blackfish/Bottom Fishing','Blackfish']
    },
    'Wreck Fishing Charters': {
        media: [codfish, wreckFishing],
        description: "Along the entire Jersey Shore, from the beach to the offshore Canyons, the Atlantic ocean is abundant with natural rock, rubble, mussel beds, wrecks and artificial reefs. All of this natural structure creates homes and feeding grounds for an assortment of fish species that we can target, most of which make for great table fare as well. Whenever you drop a line on some of the local structures, you never quite know what will bite at your hook next. Ling, Flounder, Cod, Pollock, Seabass, Porgies and Blackfish are only some of the species you might see on any given day of bottom fishing. If you are a ‘meat-eater’ this is the trip for you! The majority of the fishing year, from April through December presents great opportunities to try out some bottom fishing. Come fill a cooler with the Nearfall Crew.",
        tripTimes:["6:00am-2:30pm","7:30am-4:00pm"],
        tripDuration: {
            time: '8.5h',
            maxOccupants: 6
        },
        price: {
            deposit: 200,
            balance: 800
        },
        details: 'Bring your own Jigs; Clam provided; Sinkers & hooks provided;',
        targetCatch:[wreckTC, wreckTC1, wreckTC2, wreckTC3],
        calendarTitle: ['Blackfish/Bottom Fishing','Bottom Fishing', 'Seabass/Bottom Fishing']
    },
    'Seabass Charters': {
        media: [seabass1, seabass2, seabass3],
        description: "Seabass season, oftentimes, presents customers their first opportunity to shake off the winter rust and bend a rod again. Around mid-May through most of June, Seabass tend to congregate on most inshore structures in vast numbers, making for an exciting and action-packed day of fishing. We then get another shot at these fish in large numbers come Mid October through December (mainly due to strict NJ fishing regulations).  It often doesn't take long to fill up a cooler of these beautiful black bass. This fishery is a family favorite and is a great opportunity for new anglers to try something new. Whether it’s with a sinker rig and some clam or with a diamond jig and teaser, sea bass bite hard and they bite quickly. In addition to the entertainment, seabass are one of my personal favorites when it comes to table fare. Come load up a cooler and make some tasty ceviche for dinner!",
        tripTimes:["5:30am-12:30 pm","2:00pm-8:30pm"],
        tripDuration: {
            time: '7h',
            maxOccupants: 6
        },
        price: {
            deposit: 200,
            balance: 700
        },
        details: 'Clam provided; Bring your own Ava Jigs;',
        targetCatch:[seabassTC],
        calendarTitle: ['Seabass/Striped Bass','seabass/bottom fishing']
    },
    'Striped Bass Charters -Spring and Fall': {
        media: [stripedBass1, stripedBass2],
        description: `In the springtime, as ocean water temps rise along the shore, bait moves in numbers so great, at times, it seems you could walk on them. Bunker pods sometimes hundreds of yards long can be seen up the coast for miles. Following closely behind are trophy-sized Striped Bass. Fishing out of Belmar puts you right in the middle of some of the best Striped Bass fishing the spring run has to offer. It is common to see bass 30-45lb with fish pushing 50lb or more busting through anxious pods of bunker. We are able to target these trophy class Striped Bass by live-lining bunker, spooning and trolling. There’s nothing quite like anxiously waiting for a large fish to come up on your bait or lure. Make sure you hold on tight, because when they hit, they pick the bait up and run hard, often peeling 50 yards of line from your reel with ease! We are able to catch these fish from May through June during the spring run. During this time of year, we have plenty of daylight to work with and have the ability to customize your Striped Bass Charter to give you the best opportunity to catch your next trophy bass. Depending on your schedule and the feeding habits of the mass of fish swimming through, we have 2 available options for Striper Charters: Morning, Afternoon/Evening ‘Magic Hour’ Striped Bass trips. `,
        description2: ` As the summer months finally start to cool off and you begin thinking about your next Halloween Outfit, the ocean temps cool down and the Striped Bass make their way South again for the winter. During this time of year, you will never witness an ocean more alive. Sand eels, peanut bunker, and mullet flood the local waters. Striped Bass can be seen boiling up underneath the bait for much of the fall chasing this smaller class of bait. During this time of year, we can break out the lighter tackle, such as Ava Jigs, Swim shads, and topwater plugs. In addition to striped bass, you may have a good chance at catching gator blues, albacore, bonito and maybe even a Bluefin Tuna! We will be targeting Striped bass from the 2nd half of October through the month of December.`,
        tripTimes:["5:30am-12:30 pm","2:00pm-8:30pm"],
        tripDuration: {
            time: '7h',
            maxOccupants: 6
        },
        price: {
            deposit: 200,
            balance: 700
        },
        equipment: {
            spring: '6-7’ Conventional Rod/Reel with 30-40lb test line; Large Casting Bunker Spoons; Snag Hooks and Hooks provided',
            fall: '6-7’ Conventional and/or Spinning rod with 30-40lb test line; Casting spoons, Ava Jigs, Swimming Plugs;'
        },
        details: 'Snag hooks and hooks provided;Things to bring:; 6-7` Conventional and/or spinning Rod/Reel with 30-40lb test line.;Large Casting Bunker Spoons.; Casting spoons, Jigs, swimming plugs',
        targetCatch:[stripedBassTC],
        calendarTitle: ['Seabass/Striped Bass', 'seabass/bottom fishing']
    },
    'Fluke (summer flounder) charters': {
        media: [fluke1, fluke2],
        description: `During the spring, Fluke a.k.a summer flounder migrate inshore to our local waters. In the early part of Spring they are often found in good numbers within our inlets, rivers, and beaches. As the summer comes around, large numbers of fish take residence around fruitful hunting grounds such as rubble, mussel beds and local reefs. Summer time is the perfect opportunity to take your family, friends, and colleagues to fill a cooler of these delicious ‘flatties.’ We welcome all levels of fluke fisherman and can tailor the trip to the charter's needs. If you are a hardcore fluke fisherman looking for your next personal best fluke, our knowledge of the local bottom can set you up for your next ‘doormat’ fluke. Come join the team this Summer on the Fluke Grounds! We will be targeting Fluke from July through mid-September. `,
        description2: `Tips and Tricks: Over the past decade or so, there has been an obvious transition in the tactics used to target big fluke. Previously, we often dragged large sinkers, dragging some squid and spearing or some stripped, miscellaneous bait 2-3 feet behind the sinker. Although this method is tried and effective for catching fluke and will still work for most people, bucktailing has gained considerable popularity in these parts. When using the term bucktailing, it refers to using a jig head with bucktail tied to its collar as the terminal tackle that we can bounce off the bottom. In many cases, these jigs can be a bare jig head with no hairs tied to the collar; these jigs tend to work just as well. Having a good selection of bucktail jigs is key when fluke fishing. You should have an assortment of weights ranging from 2-6 oz. Depending on the depth, speed of the boats drift,  and structure being fished you'll find the weight of the bucktail matters. When it comes to color selection, there is an abundance and most colors will catch a fish.  The most popular colors to use tend to be white, pink, orange, and chartreuse. To make your bucktailing experience more effective, it is necessary to add some bait or an extra lure to the line to further entice the fluke chasing our bucktails. GULP has been the go to artificial bait that has produced the most fish; 4-6” swimming mullets and 5-8” grubs are most commonly used. When deciding on color, Glow white, Orange Belly Shrimp, Pink Shine, and Chartreuse are most common and found to be very effective. In addition to the artificial bait, we like to have squid and/or stripped bait on a teaser hook about 12” above your bouncing bucktail. The most effective strip bait varies by the day and depends on what’s available. We often use whole squid, squid strips, fluke ribbons, and stips of bluefish, albacore, and mackerel if it is available. Grab a 6-7’ conventional or spinning rod/reel with 20-30 lb test braid and come try this technique out with the Nearfall crew. Our skilled Captains and Deckhands will guide you, especially if you are new to the sport.`,
        tripTimes:["6:00am-2:00 pm","2:30pm-8:30pm"],
        tripDuration: {
            time: '6h -8h',
            maxOccupants: 6
        },
        price: {
            deposit: 200,
            balance: 700
        },
        details: `Sinkers, hooks provided; 
        Squid provided; Fluke Ribbons and Bluefish/Albacore Strips when available; 
        “BYOB&G”- Bring your own bucktails and GULP
        `,
        targetCatch:[flukeTC],
        calendarTitle:['Fluke']
    },
    'Magic Hour Summer Special Fishing - Fishing and Fireworks Special':{
        media: [magicHour, fireworks],
        description: `Join the Nearfall Crew on our afternoon magic hour trips during the summer. This trip is perfect for family and friends to get out on the ocean to enjoy your chance to catch anything that wants to bite. During these 4 hour trips we will target whatever is biting best locally. Whether it is Fluke, Seabass, Bluefish, Mackerel, or maybe even tuna, these trips are fun for people of all ages and levels of experience on the water. If you are one of the lucky ones, you may even get to witness a whale breach the ocean surface or a pod of dolphin gliding through the wake of the boat, all while watching the sunset over the Jersey Coast. 
        On Thursday Nights in the summer, Pt Pleasant Beach has their weekly fireworks display. Join us for our magic hour family fishing followed by the Pt Pleasant Beach Fireworks display from the ocean.  These magic hour trips are sure to bring good times and better memories. We will run these trips in July and August`,
        tripTimes:["3:30am-8:30 pm"],
        tripDuration: {
            time: '5h',
            maxOccupants: 6
        },
        price: {
            deposit: 200,
            balance: 475
        },
        details: `All Bait and Tackle provided; BYOB&G;` ,
        targetCatch:[seabassTC, flukeTC, bluefishTC],
        calendarTitle:['Fishing and Fireworks']
    },
    'October-The Mixed Bag Month': {
        media: [mixedBag, mixedBag1],
        description: `October is a great month of the year for fishing out of Belmar. The weather changes, the temperatures cool off and the ocean is teeming with life. During the month of October, much like the weather, fishing seasons change over as well. NJ fluke is closed, the stripers are on their way down the coast, and the seabass season opens. In addition to seabass, we tend to see stellar bluefishing, clouds of porgies and the exotic triggerfish fill our local bottom. The sweet cherry on top is the “pre-season” blackfish bite. Although we are only allowed to keep 1 blackfish per man during October, the blackfish in the month of October is red hot. It is not uncommon to throw back 15 keeper sized blackfish per man on a given day during the month. October is the perfect month to hone your skills and get ready for the “season opener” in November, when you are allowed to keep 5 fish a man. During these mixed bag bottom fishing trips, youll be able to get ample practice as an angler and plenty of treats for the dinner table.`,
        tripTimes:["6:00am-2:30pm", "7:30am-4:00pm"],
        tripDuration: {
            time: '8.5h',
            maxOccupants: 6
        },
        price: {
            deposit: 200,
            balance: 800
        },
        details: `Crabs and Clam provided; Bring your own Blackfish Jigs;` ,
        targetCatch: [blackfishTC, bluefishTC, grayTrigger, porgieTC, seabassTC],
        calendarTitle: ['bottom fishing']
    },
    'Sharking Charter': {
        media: [shark],
        description: `Make sure you get some stretching in and have the ice and tylenol ready at home. The Sharking specialty charter is not one for the faint of heart. On this trip we target whatever shark is hanging around the ‘chum slick.’ During the month of June, whether you want to believe it or not, the local waters are loaded with an assortment of shark species ranging from 40 to well over 1000 pounds. You can hook into brown sharks, dusky, finetooth, threshers, and the golden ticket, Mako shark on any given day when you soak some chum in the water and float out some fresh oily bait. Our gear is ready to handle whatever shark wants to rip some line out of the spool. Take turns with the crew fighting some of the toughest apex predators residing in our oceans. Depending on the size of the fish, you could be looking at a fight that could take all day long. If we are lucky enough to catch the right one, you'll have the bonus of bringing the trophy home to weigh in and steaks for the grill. If you’d rather fish for sport and watch your catch swim away, you are more than welcome to do so.  The Nearfall Crew will be with you every step of the way. `,
        tripTimes:["5:00am-5:00pm"],
        tripDuration: {
            time: '12h',
            maxOccupants: 6
        },
        price: {
            deposit: 400,
            balance: 1100
        },
        details: `If we land a fish that the crew wishes to keep, we will have to bring it home asap to have weighed in. This decision is completely up to the paying customers.; If trip is canceled, deposit may be allocated for 2 inshore trips or moved to another date for sharking; All gear and bait provided;`,
        targetCatch:[sharktc1, sharktc2],
        calendarTitle: null
    },
    'Midshore Tuna Charters': {
        media: [midShore, midShore1, midShore2, midShore3],
        description: `In recent years, our coast has seen healthy numbers of Bluefin and Yellowfin Tuna close to home. From late May through September, you have a chance at catching a sushi grade fish within 60 miles from the inlet. This fishery allows the customer a chance at some trophy sized fish and for many, a once in a lifetime experience to catch tuna without the need to spend the money necessary to  travel and fish the offshore canyons. These fish are lightning fast balls of energy that can catch you by surprise if you aren't paying attention. Within a blink of an eye, even a smaller class tuna can peel 75+yards of line off your spool. You can expect to catch these fish by trolling, jigging and chunking bait. As a customer, your personal gear that can handle the brawn of a tuna is welcome. If you are trying tuna fishing for the first time, we will have all the gear necessary for you to land your first fish. Our Nearfall team looks forward to being out there with you.`,
        tripTimes:["3:30am-5:00pm"],
        tripDuration: {
            time: '12h-16h',
            maxOccupants: 6
        },
        price: {
            deposit: 400,
            balance: 2000
        },
        details: `If trip is canceled, deposit may be allocated for 2 inshore trips or moved to another date for Midshore Tuna, Mahi and Meat trip, or Shark charter;All necessary gear provided;Recommend bringing your own selection of tuna jigs/plugs.;` ,
        targetCatch:[tunatc1, tunatc2, tunatc3],
        calendarTitle: null
    },
    'Mahi and Meat Charter': {
        media: [mahi, mahi1, mahi2],
        description: `During the late summer months, our local water temps become tropical and when the blue water pushes in, so do the Mahi Mahi. This Mahi and Meat Charter is one of my personal favorites because we will start or end the day, depending on conditions, pot hopping for Mahi Mahi, and transition to deep water bottom fishing. In the blue water, you can see the gold and green colors of the ‘dolphin’ from several yards away. We will target these fish by finding floating structure and pitching jigs and bait at the pots/debri in the water. The best part about this trip is being able to watch these fish grab your bait and do their acrobatics in the air as they fight to get away. These fish are so fast and athletic it's common for half the fight to be out of the water. To top off the day, we will anchor up on some deep water structure and take our pick at cod, pollock, ling, flounder and seabass. This trip is sure to fill a cooler with some interesting colors. This is a Nearfall favorite and we can’t wait to have you aboard!`,
        tripTimes:["4:30am-4:30pm"],
        tripDuration: {
            time: '12h',
            maxOccupants: 6
        },
        price: {
            deposit: 400,
            balance: 1100
        },
        details: `If trip is canceled, deposit may be allocated for 2 inshore trips or moved to another date for Midshore Tuna, Mahi and Meat trip, or Shark charter; All tackle and bait provided;`,
        targetCatch:[tunatc3, codTC, pollockTC, lingTC, flounderTC],
        calendarTitle: null
    },
    'Inshore Speedsters': {
        media: [inshore, inshore1, inshore2, inshore3],
        description: `During the late summer months and early fall when the water temperatures reach their peak, the inshore pelagics take temporary residence on our local lumps. The top three speedsters we will be chasing are false albacore, bonito, and spanish mackerel. These fish are similar to their heavier cousins like the bluefin tuna as they hit hard and swim fast. By targeting these fish with light, castable lures and jigs, you are sure to be impressed by the fight in these little tuna. They will have the reels and the crew screaming! We will be targeting the inshore speedsters in August and September.`,
        tripTimes:["6:00am-2:00pm","2:30pm-8:30pm"],
        tripDuration: {
            time: '8h',
            maxOccupants: 6
        },
        price: {
            deposit: 200,
            balance: 800
        },
        details: `All tackle and bait provided;`,
        targetCatch:[bluefishTC,  spanishmacktc, albacoretc, bonitotc],
        calendarTitle: null
    },
    'Evening Headboat Charters': {
        media: [dauntless, dauntless1, dauntless2],
        description: `Have a large party for a birthday, bachelor party, or work outing, and looking for the perfect summer time experience? We have the perfect option for you and your group. Join us on the F/V Dauntless, conveniently located at 47 Broadway Avenue, Pt Pleasant Beach, NJ. The boat is 85ft long and has room for parties up to 80 people and is willing to sail with a group as small as 15! We can take you on a cruise up the Jersey Coast or take you fishing on some local fishing grounds for sea bass, ling, bluefish, and cod.  All trips begin at 5pm or later too, so you don't even have to miss a day of work to join us on the ocean. We welcome all people regardless of experience to join us for some summer evening fun. Trips are customizable! Call for available dates and trip options.`,
        address:'dauntless address',
        tripTimes:["5:00pm-11:00pm"],
        tripDuration: {
            time: '6h',
            minOccupants: 15,
            maxOccupants: 80
        },
        price: {
            details:'add details'
        },
        details: `All tackle and bait provided;Call for available trips and rates;`,
        targetCatch:[],
        calendarTitle: null 
    }
}