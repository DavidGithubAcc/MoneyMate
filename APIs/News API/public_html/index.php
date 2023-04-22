<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Authorization');
// Define the arrays without keys for the items
$list = array(
    array('EU lawmakers approve world’s first comprehensive framework for crypto regulation', 'Lawmakers in the European Parliament have approved the world’s first comprehensive package of rules aimed at regulating the cryptocurrency industry.

In a vote Thursday, the EU Parliament voted 517 in favor and 38 against to pass the Markets in Crypto Act, or MiCA. The legislation, which seeks to reduce risks for consumers buying crypto assets, will mean providers can become liable if they lose investors’ crypto-assets.', 'https://image.cnbcfm.com/api/v1/image/107083589-1656654994211-gettyimages-963468298-_DHP4856.jpeg?v=1682002676&w=740&h=416&ffmt=webp&vtcrop=y', 'https://www.cnbc.com/2023/04/20/eu-lawmakers-approve-worlds-first-comprehensive-crypto-regulation.html'),



    array('ChatGPT vs the markets', '
	Please use the sharing tools found via the share button at the top or side of articles. Copying articles to share with others is a breach of FT.com T&Cs and Copyright Policy. Email licensing@ft.com to buy additional rights. Subscribers may share up to 10 or 20 articles per month using the gift article service. More information can be found at https://www.ft.com/tour.
	https://www.ft.com/content/c76cd6c0-e965-4c76-beec-e0b2deafd1ec

	Like a lot of outlets we’ve been writing a fair bit about generative AI lately, and specifically its implications for the finance industry. With so much going on, and so many hucksters jumping on the bandwagon, it’s difficult to separate AI hype from reality.

The good news is that the likes of ChatGPT would probably fail a CFA exam, can’t hold a (monetisable) tune, and tend to act like dumb momentum jockeys when it comes to investing. The bad news is that they could get degrees in economics and the law, and would probably be able to replace a junior sellside analyst.
', 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F6df6b052-e17b-430b-b6a5-d3d9f6acd1e3.jpg?fit=scale-down&source=next&width=480', 'https://www.ft.com/content/c76cd6c0-e965-4c76-beec-e0b2deafd1ec'),
array('Silicon Valley Bank share slump rocks financial stocks', 'Shares in banks around the world have slid after troubles at one US bank triggered fears of a wider problem for the financial sector.

On Thursday, shares in Silicon Valley Bank (SVB), a key lender to technology start-ups, plunged after it announced plans to shore up its finances.

This had a knock-on effect, with the four largest US banks losing more than $50bn in market value.', 'https://ichef.bbci.co.uk/news/976/cpsprodpb/2A70/production/_128946801_swb-index-getty.jpg.webp', 'https://www.bbc.co.uk/news/business-64911066'),
    array('BlackRock, Amundi could face ‘substantial’ costs from ESG downgrade reversal', 'BlackRock, Amundi and other asset managers that downgraded swathes of their greenest passive funds may be forced to upgrade them again, incurring substantial costs after softer guidance on the EUs ESG rules.', 'https://images.fnlondon.com/im-766992/?width=749&height=499', 'https://www.fnlondon.com/articles/blackrock-amundi-could-face-substantial-costs-from-esg-downgrade-reversal-20230420'),
    array('Barclays to cut more jobs in investment bank', 'Barclays is expected to cut more than 100 jobs in its investment bank this week amid a slowdown in dealmaking and stock market flotations, Sky News reported citing unnamed sources.', 'https://images.fnlondon.com/im-764528/?width=749&height=499', 'https://www.fnlondon.com/articles/barclays-to-cut-more-jobs-in-investment-bank-20230417')
    
    
    
);

// Convert list to JSON format
$json = json_encode($list);

// Set response headers to indicate that the response contains JSON data
header('Content-Type: application/json');

// Output JSON data
echo $json;
?>