document.addEventListener('DOMContentLoaded', () => {
  const message = document.getElementById('message');
  const hintRef = document.querySelector('.hint-ref');
  const letterContainer = document.getElementById('letter-container');
  const userInputSection = document.getElementById('user-input-section');
  const resultText = document.getElementById('result');
  const startButton = document.getElementById('start');
  const scoreDisplay = document.getElementById('score');
  const highScoreDisplay = document.getElementById('highScore');
  
  let selectedWord = '';
  let selectedHint = '';
  let chances = 5;
  let score = 0;
  let highScore = localStorage.getItem('highScore') || 0;

  highScoreDisplay.textContent = highScore;

  const options = {
    aroma: "Pleasing smell",
    pepper: "Salt's partner",
    halt: "Put a stop to",
    jump: "Rise suddenly",
    shuffle: "Mix cards up",
    combine: "Add; Mix",
    chaos: "Total disorder",
  aroma: "Pleasing smell",
  pepper: "Salt's partner",
  halt: "Put a stop to",
  jump: "Rise suddenly",
  shuffle: "Mix cards up",
  combine: "Add; Mix",
  chaos: "Total disorder",
  zephyr: "A gentle, mild breeze",
  glee: "Great delight",
  astonish: "To surprise greatly",
  lucid: "Expressed clearly; easy to understand",
  placate: "To make someone less angry or hostile",
  vigor: "Physical strength and good health",
  quiver: "To tremble or shake with a slight rapid motion",
  resilient: "Able to withstand or recover quickly from difficult conditions",
  tenacious: "Tending to keep a firm hold of something",
  rapture: "A feeling of intense pleasure or joy",
  scintillate: "To emit flashes of light; sparkle",
  benevolent: "Well meaning and kindly",
  cacophony: "A harsh, discordant mixture of sounds",
  ephemeral: "Lasting for a very short time",
  gregarious: "Fond of company; sociable",
  halcyon: "Denoting a period of time in the past that was idyllically happy and peaceful",
  insipid: "Lacking flavor; dull",
  jubilant: "Feeling or expressing great happiness and triumph",
  kinetic: "Relating to or resulting from motion",
  luminous: "Emitting light",
  mellifluous: "Sweet or musical; pleasant to hear",
  nostalgia: "A sentimental longing for the past",
  opulent: "Ostentatiously rich and luxurious",
  pristine: "In its original condition; unspoiled",
  quixotic: "Exceedingly idealistic; unrealistic and impractical",
  resplendent: "Attractive and impressive through being richly colorful or sumptuous",
  serendipity: "The occurrence of events by chance in a happy or beneficial way",
  tranquility: "The quality or state of being calm",
  voracious: "Wanting or devouring great quantities of food",
  euphoria: "A feeling or state of intense excitement and happiness",
  labyrinth: "A complicated irregular network of passages or paths in which it is difficult to find one's way; a maze",
  ephemeral: "Lasting for a very short time",
  mellifluous: "Sweet or musical; pleasant to hear",
  effervescent: "Vivacious and enthusiastic",
  resplendent: "Attractive and impressive through being richly colorful or sumptuous",
  quintessential: "Representing the most perfect example of a quality",
  sanguine: "Optimistic or positive, especially in an apparently bad situation",
  terse: "Sparing in the use of words; abrupt",
  ubiquitous: "Present, appearing, or found everywhere",
  vituperative: "Bitter and abusive",
  wanderlust: "A strong desire to travel",
  xenophile: "An individual who is attracted to foreign peoples, cultures, or customs",
  zealot: "A person who is fanatical and uncompromising in pursuit of their religious, political, or other ideals",
  ardent: "Enthusiastic or passionate",
  beleaguer: "To besiege; beset, surround, harass",
  cathartic: "Providing psychological relief through the open expression of strong emotions",
  dilapidated: "In a state of disrepair or ruin as a result of age or neglect",
  effulgent: "Shining brightly; radiant",
  furtive: "Attempting to avoid notice or attention, typically because of guilt",
  galvanize: "To shock or excite someone into taking action",
  incandescent: "Emitting light as a result of being heated",
  kitsch: "Art, objects, or design considered to be in poor taste but sometimes appreciated in an ironic or knowing way",
  loquacious: "Tending to talk a great deal; talkative",
  munificent: "More generous than is usual or necessary",
  nefarious: "Wicked or criminal",
  oblivion: "The state of being unaware or unconscious of what is happening around one",
  perspicacious: "Having a ready insight into and understanding of things",
  recalcitrant: "Having an obstinately uncooperative attitude toward authority or discipline",
  scintillating: "Sparkling or shining brightly",
  tenuous: "Very weak or slight",
  undulate: "To move with a smooth wavelike motion",
  vivacious: "Attractively lively and animated",
  whimsical: "Playfully quaint or fanciful, especially in an appealing and amusing way",
  xeric: "Containing little moisture; very dry",
  yearning: "A feeling of intense longing for something",
  zealotry: "Fanatical and uncompromising pursuit of religious, political, or other ideals",
  arduous: "Involving or requiring strenuous effort; difficult and tiring",
  blithe: "Showing a casual and cheerful indifference considered to be callous or improper",
  cacophonous: "Involving or producing a harsh, discordant mixture of sounds",
  dichotomy: "A division or contrast between two things that are or are represented as being opposed or entirely different",
  enigmatic: "Difficult to interpret or understand; mysterious",
  facetious: "Treating serious issues with deliberately inappropriate humor",
  hubris: "Excessive pride or self-confidence",
  imbue: "To inspire or permeate with a feeling or quality",
  juxtaposition: "The fact of two things being seen or placed close together with contrasting effect",
  kinesthetic: "Relating to a person's awareness of the position and movement of the parts of the body by means of sensory organs",
  lachrymose: "Tearful or given to weeping",
  maelstrom: "A powerful whirlpool in the sea or a river",
  neophyte: "A person who is new to a subject, skill, or belief",
  obsequious: "Obedient or attentive to an excessive or servile degree",
  plenitude: "A large or excessive amount of something",
  quixotic: "Exceedingly idealistic; unrealistic and impractical",
  recalcitrant: "Having an obstinately uncooperative attitude toward authority or discipline",
  sagacious: "Having or showing keen mental discernment",
  tenuous: "Very weak or slight",
  umbrage: "Offense or annoyance",
  vivacious: "Attractively lively and animated",
  whimsical: "Playfully quaint or fanciful, especially in an appealing and amusing way",
  xenophobic: "Having or showing a dislike of or prejudice against people from other countries",
  yearning: "A feeling of intense longing for something",
  zealotry: "Fanatical and uncompromising pursuit of religious, political, or other ideals",
  arduous: "Involving or requiring strenuous effort; difficult and tiring",
  blithe: "Showing a casual and cheerful indifference considered to be callous or improper",
  cacophonous: "Involving or producing a harsh, discordant mixture of sounds",
  dichotomy: "A division or contrast between two things that are or are represented as being opposed or entirely different",
  enigmatic: "Difficult to interpret or understand; mysterious",
  facetious: "Treating serious issues with deliberately inappropriate humor",
  hubris: "Excessive pride or self-confidence",
  imbue: "To inspire or permeate with a feeling or quality",
  juxtaposition: "The fact of two things being seen or placed close together with contrasting effect",
  kinesthetic: "Relating to a person's awareness of the position and movement of the parts of the body by means of sensory organs",
  lachrymose: "Tearful or given to weeping",
  maelstrom: "A powerful whirlpool in the sea or a river",
  neophyte: "A person who is new to a subject, skill, or belief",
  obsequious: "Obedient or attentive to an excessive or servile degree",
  plenitude: "A large or excessive amount of something",
  quixotic: "Exceedingly idealistic; unrealistic and impractical",
  resplendent: "Attractive and impressive through being richly colorful or sumptuous",
  serendipity: "The occurrence of events by chance in a happy or beneficial way",
  tranquil: "Free from disturbance; calm",
  umbrage: "Offense or annoyance",
  vivacious: "Attractively lively and animated",
  whimsical: "Playfully quaint or fanciful, especially in an appealing" ,
      ephemeral: "Lasting for a very short time",
gregarious: "Fond of company; sociable",
halcyon: "Denoting a period of time in the past that was idyllically happy and peaceful",
insipid: "Lacking flavor; dull",
jubilant: "Feeling or expressing great happiness and triumph",
kinetic: "Relating to or resulting from motion",
luminous: "Emitting light",
mellifluous: "Sweet or musical; pleasant to hear",
nostalgia: "A sentimental longing for the past",
opulent: "Ostentatiously rich and luxurious",
pristine: "In its original condition; unspoiled",
quixotic: "Exceedingly idealistic; unrealistic and impractical",
resplendent: "Attractive and impressive through being richly colorful or sumptuous",
serendipity: "The occurrence of events by chance in a happy or beneficial way",
tranquility: "The quality or state of being calm",
voracious: "Wanting or devouring great quantities of food",
whimsical: "Playfully quaint or fanciful, especially in an appealing and amusing way",
xenial: "Hospitable, especially to visiting strangers or foreigners",
yonder: "At some distance in the direction indicated; over there",
zenith: "The highest point reached by a celestial or other object",
adjacent: "Next to or adjoining something else",
beseech: "To ask someone urgently and fervently to do something",
cogent: "Clear, logical, and convincing",
deft: "Neatly skillful and quick in one's movements",
exuberant: "Filled with lively energy and excitement",
felicitous: "Well chosen or suited to the circumstances",
harbinger: "A person or thing that announces the approach of another",
ineffable: "Too great or extreme to be expressed in words",
jocular: "Fond of or characterized by joking",
keen: "Having or showing eagerness or enthusiasm",
luculent: "Clear in thought or expression",
mirth: "Amusement, especially as expressed in laughter",
nonchalant: "Feeling or appearing casually calm and relaxed",
obdurate: "Stubbornly refusing to change one's opinion or course of action",
pensive: "Engaged in serious thought",
quintessential: "Representing the most perfect example of a quality",
reverence: "Deep respect for someone or something",
staunch: "Loyal and committed in attitude",
tranquil: "Free from disturbance; calm",
umbrage: "Offense or annoyance",
venerated: "Regarded with great respect",
yearn: "To have an intense feeling of longing for something",
zealous: "Having or showing zeal",
aloof: "Not friendly or forthcoming; cool and distant",
banter: "The playful and friendly exchange of teasing remarks",
candid: "Truthful and straightforward; frank",
debilitate: "To make someone weak and infirm",
elated: "Ecstatically happy",
flabbergasted: "Extremely surprised or shocked",
gracious: "Courteous, kind, and pleasant",
harrowing: "Acutely distressing",
impeccable: "In accordance with the highest standards; faultless",
jovial: "Cheerful and friendly",
kudos: "Praise and honor received for an achievement",
lethargic: "Affected by lethargy; sluggish and apathetic",
maverick: "An independent-minded person",
nuance: "A subtle difference in or shade of meaning",
oblivious: "Not aware of or not concerned about what is happening around one",
placid: "Not easily upset or excited",
quaint: "Attractively unusual or old-fashioned",
reticent: "Not revealing one's thoughts or feelings readily",
sagacious: "Having or showing keen mental discernment",
tangible: "Perceptible by touch",
undaunted: "Not intimidated or discouraged by difficulty, danger, or disappointment",
vex: "To make someone feel annoyed, frustrated, or worried",
wary: "Feeling or showing caution about possible dangers",
xenophobic: "Having or showing a dislike of or prejudice against people from other countries",
yield: "To produce or provide",
abdicate: "To renounce one's throne",
bequeath: "To leave a personal estate to a person or other beneficiary by a will",
conundrum: "A confusing and difficult problem or question",
diminutive: "Extremely or unusually small",
effervescent: "Vivacious and enthusiastic",
flummox: "To perplex someone greatly; bewilder",
gallant: "Brave; heroic",
heed: "To pay attention to; take notice of",
inept: "Having or showing no skill; clumsy",
juxtapose: "To place or deal with close together for contrasting effect",
kin: "One's family and relations",
lurid: "Very vivid in color, especially so as to create an unpleasantly harsh or unnatural effect",
misanthrope: "A person who dislikes humankind and avoids human society",
noxious: "Harmful, poisonous, or very unpleasant",
oracular: "Relating to an oracle; prophetic",
perfunctory: "Carried out with a minimum of effort or reflection",
reclusive: "Avoiding the company of other people",
      sanguine: "Optimistic or positive, especially in an apparently bad situation",
terse: "Sparing in the use of words; abrupt",
ubiquity: "The fact of appearing everywhere or of being very common",
vituperative: "Bitter and abusive",
wanderlust: "A strong desire to travel",
xenophile: "An individual who is attracted to foreign peoples, cultures, or customs",
zealot: "A person who is fanatical and uncompromising in pursuit of their religious, political, or other ideals",
ardent: "Enthusiastic or passionate",
beleaguer: "To besiege; beset, surround, harass",
cathartic: "Providing psychological relief through the open expression of strong emotions",
dilapidated: "In a state of disrepair or ruin as a result of age or neglect",
effulgent: "Shining brightly; radiant",
furtive: "Attempting to avoid notice or attention, typically because of guilt",
galvanize: "To shock or excite someone into taking action",
incandescent: "Emitting light as a result of being heated",
kitsch: "Art, objects, or design considered to be in poor taste but sometimes appreciated in an ironic or knowing way",
loquacious: "Tending to talk a great deal; talkative",
munificent: "More generous than is usual or necessary",
nefarious: "Wicked or criminal",
oblivion: "The state of being unaware or unconscious of what is happening around one",
perspicacious: "Having a ready insight into and understanding of things",
recalcitrant: "Having an obstinately uncooperative attitude toward authority or discipline",
scintillating: "Sparkling or shining brightly",
tenuous: "Very weak or slight",
undulate: "To move with a smooth wavelike motion",
vivacious: "Attractively lively and animated",
whimsical: "Playfully quaint or fanciful, especially in an appealing and amusing way",
xeric: "Containing little moisture; very dry",
yearning: "A feeling of intense longing for something",
zealotry: "Fanatical and uncompromising pursuit of religious, political, or other ideals",
arduous: "Involving or requiring strenuous effort; difficult and tiring",
blithe: "Showing a casual and cheerful indifference considered to be callous or improper",
cacophonous: "Involving or producing a harsh, discordant mixture of sounds",
dichotomy: "A division or contrast between two things that are or are represented as being opposed or entirely different",
enigmatic: "Difficult to interpret or understand; mysterious",
facetious: "Treating serious issues with deliberately inappropriate humor",
hubris: "Excessive pride or self-confidence",
imbue: "To inspire or permeate with a feeling or quality",
juxtaposition: "The fact of two things being seen or placed close together with contrasting effect",
kinesthetic: "Relating to a person's awareness of the position and movement of the parts of the body by means of sensory organs",
lachrymose: "Tearful or given to weeping",
maelstrom: "A powerful whirlpool in the sea or a river",
neophyte: "A person who is new to a subject, skill, or belief",
obsequious: "Obedient or attentive to an excessive or servile degree",
plenitude: "An abundance",
quintessential: "Representing the most perfect example of a quality",
recalcitrant: "Having an obstinately uncooperative attitude toward authority or discipline",
sagacious: "Having or showing keen mental discernment",
terse: "Sparing in the use of words; abrupt",
umbrage: "Offense or annoyance",
vacillate: "To alternate or waver between different opinions or actions",
winsome: "Attractive or appealing in appearance or character",
xenial: "Hospitable, especially to visiting strangers or foreigners",
yonder: "At some distance in the direction indicated; over there",
zenith: "The highest point reached by a celestial or other object",
acumen: "The ability to make good judgments and quick decisions, typically in a particular domain",
banal: "So lacking in originality as to be obvious and boring",
candor: "The quality of being open and honest in expression; frankness",
delineate: "To describe or portray (something) precisely",
eloquent: "Fluent or persuasive in speaking or writing",
fervent: "Having or displaying a passionate intensity",
gossamer: "A fine, filmy substance consisting of cobwebs spun by small spiders, which is seen especially in autumn",
histrionic: "Overly theatrical or melodramatic in character or style",
impervious: "Not allowing fluid to pass through",
juxtapose: "To place or deal with close together for contrasting effect",
kismet: "Destiny; fate",
lament: "A passionate expression of grief or sorrow",
magnanimous: "Very generous or forgiving, especially toward a rival or someone less powerful than oneself",
noxious: "Harmful, poisonous, or very unpleasant",
obsequious: "Obedient or attentive to an excessive or servile degree",
parsimonious: "Unwilling to spend money or use resources; stingy or frugal",
querulous: "Complaining in a petulant or whining manner",
rapscallion: "A mischievous person",
surreptitious: "Kept secret, especially because it would not be approved of",
truculent: "Eager or quick to argue or fight; aggressively defiant",
ubiquitous: "Present, appearing, or found everywhere",
variegated: "Exhibiting different colors, especially as irregular patches or streaks",
winsome: "Attractive or appealing in appearance or character",
xenophobic: "Having or showing a dislike of or prejudice against people from other countries",
yonder: "At some distance in the direction indicated; over there",
zealotry: "Fanatical and uncompromising pursuit of religious, political, or other ideals",
      acquiesce: "Accept something reluctantly but without protest",
benevolent: "Well meaning and kindly",
capricious: "Given to sudden and unaccountable changes of mood or behavior",
dilapidated: "In a state of disrepair or ruin as a result of age or neglect",
ephemeral: "Lasting for a very short time",
furtive: "Attempting to avoid notice or attention, typically because of guilt",
gregarious: "Fond of company; sociable",
haphazard: "Lacking any obvious principle of organization",
impetuous: "Acting or done quickly and without thought or care",
juxtapose: "To place or deal with close together for contrasting effect",
kaleidoscope: "A constantly changing pattern or sequence of elements",
labyrinth: "A complicated irregular network of passages or paths in which it is difficult to find one's way; a maze",
mellifluous: "Sweet or musical; pleasant to hear",
nefarious: "Wicked or criminal",
obfuscate: "Render obscure, unclear, or unintelligible",
paragon: "A person or thing regarded as a perfect example of a particular quality",
quintessential: "Representing the most perfect or typical example of a quality or class",
resplendent: "Attractive and impressive through being richly colorful or sumptuous",
serendipity: "The occurrence and development of events by chance in a happy or beneficial way",
taciturn: "Reserved or uncommunicative in speech; saying little",
ubiquitous: "Present, appearing, or found everywhere",
vexatious: "Causing or tending to cause annoyance, frustration, or worry",
whimsical: "Playfully quaint or fanciful, especially in an appealing and amusing way",
xenial: "Relating to hospitality",
yonder: "At some distance in the direction indicated; over there",
zenith: "The highest point reached by a celestial or other object",
abstruse: "Difficult to understand; obscure",
bucolic: "Relating to the pleasant aspects of the countryside and country life",
cerebral: "Intellectual rather than emotional or physical",
deleterious: "Causing harm or damage",
ebullient: "Cheerful and full of energy",
facetious: "Treating serious issues with deliberately inappropriate humor",
garrulous: "Excessively talkative, especially on trivial matters",
hedonistic: "Engaged in the pursuit of pleasure; sensually self-indulgent",
impecunious: "Having little or no money",
jejune: "Naive, simplistic, and superficial",
kowtow: "Act in an excessively subservient manner",
lachrymose: "Tearful or given to weeping",
maudlin: "Self-pityingly or tearfully sentimental",
nadir: "The lowest point in the fortunes of a person or organization",
obstreperous: "Noisy and difficult to control",
pedantic: "Excessively concerned with minor details or rules",
quixotic: "Exceedingly idealistic; unrealistic and impractical",
rancorous: "Characterized by bitterness or resentment",
sagacious: "Having or showing keen mental discernment and good judgment",
taciturn: "Reserved or uncommunicative in speech; saying little",
unctuous: "Excessively or ingratiatingly flattering; oily",
vociferous: "Loud and forceful in making one's feelings known",
winsome: "Attractive or appealing in appearance or character",
xenophobic: "Having or showing a dislike of or prejudice against people from other countries",
yielding: "Tending to give in to others; compliant or accommodating",
zenith: "The highest point reached by a celestial or other object",
      aardvark: "A nocturnal burrowing mammal with long ears, a tubular snout, and a long tongue, native to Africa",
bucolic: "Relating to the pleasant aspects of the countryside and country life",
cynosure: "A person or thing that is the center of attention or admiration",
dromedary: "A one-humped camel, especially one of a light and swift breed trained for riding or racing",
elephantine: "Of, resembling, or characteristic of an elephant or elephants, especially in being large, clumsy, or awkward",
fennec: "A small nocturnal fox with large ears, native to the deserts of North Africa and Arabia",
giraffe: "A large African mammal with a very long neck and forelegs, having a coat patterned with brown patches separated by lighter lines",
hippopotamus: "A large thick-skinned semi-aquatic African mammal, with massive jaws and large tusks",
ibex: "A wild mountain goat with long, thick ridged horns and a beard, found in the Alps and other mountainous regions",
jackal: "A slender, long-legged wild dog that feeds on carrion, game, and fruit, found in Africa and southern Asia",
koala: "An arboreal Australian marsupial that has thick gray fur and feeds on eucalyptus leaves",
lemur: "An arboreal primate with a pointed snout and typically a long tail, found only in Madagascar",
manatee: "A herbivorous aquatic mammal native to warm coastal waters, with a rounded tail flipper",
narwhal: "A small Arctic whale, the male of which has a long forward-pointing spirally twisted tusk",
ocelot: "A medium-sized wild cat that has a tawny yellow coat marked with black rosettes, native to South and Central America",
pangolin: "An African and Asian mammal covered in horny scales, with a long snout and a long tongue for feeding on ants and termites",
quokka: "A small wallaby with a short face and round ears, native to the coastal islands of southwestern Australia",
rhinoceros: "A large, heavily built plant-eating mammal with one or two horns on the nose and thick folded skin, native to Africa and southern Asia",
sloth: "A slow-moving tropical American mammal that hangs upside down from the branches of trees using its long limbs and hooked claws",
tapir: "A nocturnal hoofed mammal with a stout body and a long snout, native to the forests of tropical America and Malaysia",
uakari: "A small short-tailed monkey found in the forests of the Amazon basin, with a red face and long hair",
vicuña: "A wild South American camelid, smaller than the guanaco, valued for its fine silky wool",
wolverine: "A heavily built short-legged carnivorous mammal with a thick coat, native to northern tundra and forests",
xerus: "A type of African ground squirrel",
yak: "A large domesticated wild ox with shaggy hair, humped shoulders, and large horns, found throughout the Himalayan region of south Asia",
zebu: "A domesticated ox with a humped back and long horns, found in the Indian subcontinent and parts of East Africa",
aspidistra: "A plant of the lily family with broad tapering leaves, native to eastern Asia",
bumptious: "Irritatingly self-assertive",
conflagration: "An extensive fire that destroys a great deal of land or property",
dystopian: "Relating to or denoting an imagined state or society where there is great suffering or injustice",
ebullient: "Cheerful and full of energy",
flummox: "Perplex someone greatly; bewilder",
garrulous: "Excessively talkative, especially on trivial matters",
hubris: "Excessive pride or self-confidence",
ineluctable: "Unable to be resisted or avoided; inescapable",
jejune: "Naive, simplistic, and superficial",
kowtow: "Act in an excessively subservient manner",
licentious: "Promiscuous and unprincipled in sexual matters",
magnanimous: "Very generous or forgiving, especially toward a rival or someone less powerful than oneself",
nadir: "The lowest point in the fortunes of a person or organization",
ostracize: "Exclude someone from a society or group",
pachyderm: "A very large mammal with thick skin, especially an elephant, rhinoceros, or hippopotamus",
quixotic: "Exceedingly idealistic; unrealistic and impractical",
recapitulate: "Summarize and state again the main points of",
soporific: "Tending to induce drowsiness or sleep",
truculent: "Eager or quick to argue or fight; aggressively defiant",
ubiquitous: "Present, appearing, or found everywhere",
vulpine: "Relating to a fox or foxes",
waft: "Pass or cause to pass easily or gently through or as if through the air",
xenial: "Hospitable, especially to visiting strangers or foreigners",
yammer: "Make a loud repetitive noise",
zealot: "A person who is fanatical and uncompromising in pursuit of their religious, political, or other ideals",
    // Add more words and hints here...
  };


  const startGame = () => {
    // Reset game state
    chances = 5;
    resultText.textContent = '';
    message.textContent = '';
    letterContainer.innerHTML = '';
    userInputSection.innerHTML = '';

    // Hide the start button
    startButton.style.display = 'none';

    // Choose a random word
    const optionKeys = Object.keys(options);
    const randomIndex = Math.floor(Math.random() * optionKeys.length);
    selectedWord = optionKeys[randomIndex];
    selectedHint = options[selectedWord];

    // Display hint
    hintRef.textContent = `Hint: ${selectedHint}`;

    // Display input spaces
    userInputSection.innerHTML = selectedWord.split('').map(() => '<span class="inputSpace">_</span>').join('');

    // Display letter buttons
    for (let i = 65; i < 91; i++) {
      const letter = String.fromCharCode(i);
      const button = document.createElement('button');
      button.textContent = letter;
      button.classList.add('letters');
      button.addEventListener('click', () => handleLetterClick(button));
      letterContainer.appendChild(button);
    }
  };

  const handleLetterClick = (button) => {
    const letter = button.textContent.toLowerCase();
    const inputSpaces = document.querySelectorAll('.inputSpace');
    let correctGuess = false;

    selectedWord.split('').forEach((char, index) => {
      if (char === letter) {
        inputSpaces[index].textContent = char;
        correctGuess = true;
      }
    });

    if (!correctGuess) {
      chances--;
    }

    button.disabled = true;

    if (chances === 0) {
      resultText.textContent = `Sorry 😔 you lost. The word was "${selectedWord}". Try again later.`;
      letterContainer.innerHTML = ''; // Clear letter buttons

      // Update high score if necessary
      if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
        highScoreDisplay.textContent = highScore;
      }

      // Reset score
      score = 0;
      scoreDisplay.textContent = score;

      setTimeout(() => {
        alert('Game Over!');
        startButton.style.display = 'block';
      }, 1000);
    }

    if (Array.from(inputSpaces).every(span => span.textContent !== '_')) {
      score++;
      scoreDisplay.textContent = score;
      resultText.textContent = 'Congratulations! You guessed it right! 🎉';
      letterContainer.innerHTML = ''; // Clear letter buttons
      setTimeout(() => {
        // Show confetti animation
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        document.body.appendChild(confetti);

        // Remove confetti element after animation completes
        confetti.addEventListener('animationend', () => {
          confetti.remove();
        });

        alert('You Won!');
        startGame(); // Start a new game automatically
      }, 1000);
    }
  };

  startButton.addEventListener('click', startGame);
});
// Select all letter buttons
const letterButtons = document.querySelectorAll('#letter-container button');

// Iterate over each letter button and add a click event listener
letterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Add the 'clicked' class to the clicked button
    button.classList.add('clicked');
    // Disable the button to prevent further clicks
    button.disabled = true;
  });
});