/* General Styling */
body {
  font-family: etbb, serif !important;
}

.post-title.entry-title {
  color: black !important;
  margin-left: 10% !important;
}

/* Responsive Styling */
@media (max-width: 1200px) {
  h2, h3 {
    color: black !important;
  }

  h3 a {
    color: #002366 !important;
  }
}

@media only screen and (hover: none) and (pointer: coarse) and (max-width: 1000px) {
  html {
    font-size: 220% !important;
  }

  p {
    max-width: 80% !important;
    padding: 10px !important;
    margin: 6.0pt 0cm 6.0pt 0cm;
    text-align: justify !important;
  }

  body {
    border-left: 50px solid red !important;
    border-right: 50px solid red !important;
  }

  h2, h3 {
    font-size: 115% !important;
    color: black !important;
  }
}

/* First Letter Styling */
p.first::first-letter {
  line-height: 0.7em !important;
  font-family: "trajan-color" !important;
  color: black !important;
  font-size: 4em !important;
  margin-top: 0.15em !important;
  margin-right: 6px;
  float: left !important;
}

/* Typography Settings */
body *, .byline, .byline a, .flat-button {
  font-family: etbb, serif !important;
  font-variant-numeric: oldstyle-nums proportional-nums !important;
  font-feature-settings: "onum", "pnum" !important;
}


/* Post Header Styling */
.post-header-line-1 {
  margin-left: 35% !important;
  font-style: italic !important;
  font-weight: normal !important;
}

/* Byline and Comments Styling */
.byline, .post-comment-link.container {
  display: inline-block;
  font-variant-caps: all-small-caps;
  font-weight: 400;
  font-feature-settings: "c2sc", "smcp", "onum", "pnum" !important;
}

/* Post Footer Styling */
.post-footer {
  margin-left: 22.5% !important;
}

/* Mobile Byline and Timestamp Centering */
@media (max-width: 768px) {
  .byline.post-timestamp {
    display: block !important;
    text-align: center !important;
    margin: 0 !important;
  }
}

/* Post Sidebar */
.post-sidebar {
  display: none !important;
}

/* Blockquote Styling */
blockquote {
  font-family: etbb, serif;
  font-style: italic;
  font-variant-numeric: proportional-nums oldstyle-nums !important;
  font-feature-settings: "onum", "pnum" !important;
}

/* Miscellaneous */
.no-posts-message {
  margin: 32px;
}

.popular-posts-snippet .snippet-item span {
  font-variant: small-caps;
  line-height: 2;
}







/* Entry Title Styling */
h3.post-title.entry-title {
   font-style: italic !important;
   font-weight: normal !important;
  display: block;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 50% !important;
}



a.g-profile {font-style: normal !important; letter-spacing: 2px !important;}
.post-header-container .byline.post-author:not(:last-child)::after{
content: "on" !important; 
font-style: italic !important;
letter-spacing: normal !important;
font-variant-caps: normal !important;
font-feature-settings:  normal !important;
}
span.post-author-label {font-variant-caps: normal !important; letter-spacing: normal !important;}
time.published {font-style: normal !important; letter-spacing:2px !important }
.post-header-container {margin-block: 0px !important
}

div.byline.jump-link {visibility: hidden !important;}
div.post-footer {width: 75% !important;
    margin-left: 27% ! important;
    color: #002366 !important;}

    .post-share-buttons {    color: #002366 !important;}
    a.comment-link.flat-button.ripple {    color: #002366 !important;}

    div.sharing {margin-right: 2em;     color: #002366 !important;}

button {color: #002366 !important;}
a.timestamp-link {
   font-style: normal !important;
   
}