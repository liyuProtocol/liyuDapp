web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
//abi = JSON.parse('[{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]')
//VotingContract = web3.eth.contract(abi);
 
//部署的合约地址 
//contractInstance = VotingContract.at('0x5B15C032F8C8787815a73A2800560772196437Aa');
 
candidates = {"Alice": "candidate-1","Bob": "candidate-2","Cary":"candidate-3"}

 
function voteForCandidate() {  
 var strPeterLi = web3.fromAscii('PeterLi');
console.log("strPeterLi:" + strPeterLi); // "0x657468657265756d"
var strJackMa = web3.fromAscii('JackMa');
console.log("strJackMa:"+ strJackMa); // 
var strJBFeng = web3.fromAscii('JBFeng');
console.log("strJBFeng:"+ strJBFeng); // 

var str2 = web3.fromAscii('ethereum', 32);
console.log(str2); // "0x657468657265756d000000000000000000000000000000000000000000000000"
 
}
 
$(document).ready(function() {
  candidateNames = Object.keys(candidates);
  for (var i = 0; i < candidateNames.length; i++) {
    let name = candidateNames[i];
    let val = contractInstance.totalVotesFor.call(name).toString()
    $("#" + candidates[name]).html(val);
  }
});
 