/* JS code to trigger the loading screen and redirect to the target URL */
document.getElementById("learn-more-button").addEventListener("click", function() {
    var loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "block";
    setTimeout(function() {
      window.location.href = "https://www.heatwellshop.com/1200/en/order.html?temp=hcvr&fomo=1&loader=1&Affid=20143&s1=&s2=&s3=&s4=6233&s5=26e98bc5eb724c1cb5219a955fa2eee5&domain1=www.frscosr.com&network_id=69&ctr_tracking__site_id=63b38ca2dd8c0a1218557d13&ctr_tracking__page_id=63b4c180dd8c0a1218559e87&ctr_tracking__conversion_url=https%3A%2F%2Fwww.heatwellshop.com%2F1200%2Fen%2Findex.html&ctr_tracking__click_id=80b2576f-aaff-42d8-a069-d70843232998&ctr_tracking__original_click_id=80b2576f-aaff-42d8-a069-d70843232998"; // Replace with your target URL
    }, 3000); // Replace with your desired loading time in milliseconds
  });
  