web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"}]');
VotingContract = web3.eth.contract(abi);
 
//部署的合约地址 
contractInstance = VotingContract.at('0x3DE61c2908Aa542d324c9D18f5BE0CF54b00F9C8');
 
candidates = {"PeterLi": "candidate-1","JackMa": "candidate-2","JBFeng":"candidate-3"}
 
function voteForCandidate() {
  //console.log(candidate);
  candidateName = $("#candidate").val();
  //console.log(candidateName);
  contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]}, function() {
    let div_id = candidates[candidateName];
    console.log(contractInstance.totalVotesFor.call(candidateName).toString());
    $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
  });
  console.log(contractInstance.totalVotesFor.call(candidateName).toString());
}
 
$(document).ready(function() {
  candidateNames = Object.keys(candidates);
  for (var i = 0; i < candidateNames.length; i++) {
    let name = candidateNames[i];
    let val = contractInstance.totalVotesFor.call(name).toString()
    $("#" + candidates[name]).html(val);
  }
});
 