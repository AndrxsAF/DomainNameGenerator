let pronoun = ["the", "our", "last"];
let adj = ["great", "big", "of"];
let noun = ["jogger", "racoon", "us"];
let domains = [".com", ".net", ".org", ".us", ".io", ".tv"];

for (let i in pronoun) {
  for (let j in adj) {
    for (let h in noun) {
      if (noun[h].length <= 3) {
        console.log(`${pronoun[i]}${adj[j]}.${noun[h]}`);
      } else {
        for (let k in domains) {
          console.log(`${pronoun[i]}${adj[j]}${noun[h]}${domains[k]}`);
        }
      }
    }
  }
}
