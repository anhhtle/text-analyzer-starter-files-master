// your code here!
var $wordCount;
var $uniqueWord;
var $averageWordLength;
var $averageSentenceLength;

function getUserInput() {
  var $userText =$('textarea').val();
  return $userText;
}

function tokenizeText(text) {
  var $token = text.toLowerCase().match(/\b[^\s]+\b/g).sort();
  $wordCount = $token.length;
  return $token;
}

function getUniqueWord(token) {
  $uniqueWord = 0;
  $temp = token;
  $temp.push('');
  for(var i = 0; i < $temp.length - 1; i++){
    if($temp[i] !== $temp[i+1])
      $uniqueWord++;
  }
  return $uniqueWord;
}

function getAverageWordLength(token) {
  var $joinToken = token.join("");
  $averageWordLength = ($joinToken.length / $wordCount).toFixed(2);
  return $averageWordLength;
}

function getAverageSentenceLength(text) {
  console.log(text.match(/[?!.]+/g));
  var $sentenceCount = text.match(/[?!.]+/g) ? text.match(/[?!.]+/g).length: 1;
  console.log('number of sentences: ' + $sentenceCount);
  $averageSentenceLength = ($wordCount / $sentenceCount).toFixed(2);
}

function inputRes() {
  $('.js-word-count').text($wordCount);
  $('.js-unique-word-count').text($uniqueWord);
  $('.js-word-length').text($averageWordLength);
  $('.js-sentence-length').text($averageSentenceLength);
  //show hidden text
  $('.hidden').removeClass('hidden');
}



function mainFunction(){
  $('.js-form').submit(function(event){
    event.preventDefault();
    
    //get user input
    var $userText = getUserInput();
    
    //tokenize text and get total word count
    var $token = tokenizeText($userText);
    console.log('tokenized: ' + $token);
    console.log('word count: ' + $wordCount);
    
    //get unique word count
    getUniqueWord($token);
    console.log('unique word: ' + $uniqueWord);
    
    //get average word length
    getAverageWordLength($token);
    console.log('average word length: ' + $averageWordLength);
    
    //get average sentence length
    getAverageSentenceLength($userText);
    console.log('average sentence length: ' + $averageSentenceLength)
    
    //input result
    inputRes();
    
  });
}


$(function() {
	mainFunction();
});