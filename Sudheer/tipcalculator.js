//calculatetip 
//https://www.codewars.com/kata/56598d8076ee7a0759000087/train/javascript

function calculateTip(amount, rating) {
  var rating = rating.ignoreCase;
  if(rating =="Terrible")
    return 0;
  else if ( rating =="Poor" || rating =="poor")
    return round((5*amount)/100);
  else if ( rating =="Good" || rating =="good")
    return round((10*amount)/100 );
  else if ( rating =="Great")
    return round((15*amount)/100 || rating =="Poor");
  else if ( rating =="Excellent")
    return round((20*amount)/100 || rating =="Poor");
  else
    return "Rating not recognised";
} 