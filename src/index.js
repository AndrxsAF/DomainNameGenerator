let pronoun = ["the", "our", "last"];
let adj = ["great", "big", "of"];
let noun = ["jogger", "racoon", "us"];
let domains = [".com", ".net", ".org", ".us", ".io", ".tv"];

for (i in pronoun) {
  for (j in adj) {
    for (h in noun) {
      if (noun[h].length <= 3) {
        console.log(`${pronoun[i]}${adj[j]}.${noun[h]}`);
      } else {
        for (k in domains) {
          console.log(`${pronoun[i]}${adj[j]}${noun[h]}${domains[k]}`);
        }
      }
    }
  }
}
