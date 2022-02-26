import React, {useEffect} from 'react';

const Review = () => {
     
     const googlePlaces = () => {
        googlePlaces("google-reviews", {
            placeId: 'ChIJjSvydwdlwjsRKgTy3F6nkUs',
            // the following params are optional (default values)
            header: "<h3>Google Reviews</h3>", // html/text over Reviews
            footer: '', // html/text under Reviews block
            maxRows: 6, // max rows of reviews to be displayed
            minRating: 4, // minimum rating of reviews to be displayed
            months: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            textBreakLength: "90", // length before a review box is set to max width
            showDate: false, // renders the date of the review before the review itself
            shortenNames: true, // example: "Max Mustermann" -> "Max M.""
            replaceAnonymous: false, // do not replace anonymous author_name from JSON
            anonymousName: "A Google User", // Google's default value depending on language used (en: "A Google User")
            anonymousNameReplacement: "User chose to remain anonymous", // replacement for default (never shortens)
          });
     }
       
    
   


  return (
    <div id="google-reviews"></div>
  )
}

export default Review;