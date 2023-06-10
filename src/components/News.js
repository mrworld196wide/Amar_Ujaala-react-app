import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "entertainment-weekly",
        "name": "Entertainment Weekly"
      },
      "author": "Lauren Huff",
      "title": "<em>Based on a True Story</em> stars Chris Messina, Kaley Cuoco talk murder, marriage, and the appeal of true crime",
      "description": "Kaley Cuoco, Chris Messina, and Tom Bateman star in the new comedic thriller, out June 8 on Peacock.",
      "url": "https://ew.com/tv/based-on-a-true-story-chris-messina-kaley-cuoco-preview/",
      "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B1000%2C266%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F06%2F05%2FBased-on-a-True-Story-060523-03-2000.jpg",
      "publishedAt": "2023-06-07T18:00:00Z",
      "content": "America has an undeniable true crime fixation. Countless podcasts, docuseries, films, and the like are dedicated to all things murder, death, and serial killer — but what does this fixation say about… [+7754 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Manuel Roig-Franzia",
      "title": "The enslaver next door: Why Brazil is fascinated by Margarida Bonetti",
      "description": "How a reclusive heiress’s past in suburban D.C. sparked a true-crime sensation in Brazil — and a national reckoning over the status of household servants",
      "url": "https://www.washingtonpost.com/lifestyle/interactive/2023/margarida-bonetti-brazil-podcast-slavery/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2PLAMNBKZBDLJP5UK4G6OKQWYY.jpg&w=1200",
      "publishedAt": "2023-06-07T09:00:22Z",
      "content": "In SÃO PAULO, Brazil\r\nIn this traffic-choked megacity, a grand old house rots on a quiet side street, shoulder-to-shoulder with the luxury high-rises that replaced its grand old neighbors many years … [+34170 chars]"
    },
    {
      "source": {
        "id": "il-sole-24-ore",
        "name": "Il Sole 24 Ore"
      },
      "author": null,
      "title": "Ucraina, ultime notizie. Zelensky: dopo esplosione diga Kakhova enorme chiazza petrolio verso Mar Nero. Kherson, 70 attacchi in 24 ore",
      "description": "Tensione ai massimi dopo la distruzione della diga di Kakhova, strategica per alimentare la Crimea e la centrale nucleare di Zaporizhzhia. Per Zelensky la Russia ha «deliberatamente fatto saltare la diga» e «il mondo deve reagire», denunciando una «enorme chi…",
      "url": "https://www.ilsole24ore.com/art/ucraina-ultime-notizie-zelensky-esplosione-diga-kakhova-enorme-chiazza-petrolio-mar-nero-kherson-70-attacchi-24-ore-AEbMhNbD",
      "urlToImage": "https://i2.res.24o.it/images2010/2023/06/AEbMhNbD/images/1475d7d6-04f6-11ee-ac2b-4ae9b40005db-fotohome0.jpg",
      "publishedAt": "2023-06-07T05:47:57Z",
      "content": "A causa dellesplosione della diga di Kakhovka,si è formata una chiazza di petrolio di almeno 150 tonnellate che viene trasportata dalla corrente verso il Mar Nero. Non possiamo ancora prevedere quant… [+307 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": null,
      "title": "The Last Ride: True crime podcast investigates the suspicious vanishing of two Florida men",
      "description": "Terrance Williams and Felipe Santos were last seen in the custody of ex-Collier County, Florida, deputy Steven Calkins. Neither has ever been found.",
      "url": "https://www.usatoday.com/in-depth/news/2023/04/04/true-crime-podcast-terrance-williams-felipe-santos-florida-steven-calkins/11598225002/",
      "urlToImage": "https://www.gannett-cdn.com/presto/2023/03/10/PNDN/519f01a4-3720-4a84-af8a-d3d39fb932a3-2000px-The_Last_Ride_logo_FINAL_RGB_WEB_w03-01_-_podcast_tile_copy.png?crop=1999%2C1124%2Cx1%2Cy403&width=1200",
      "publishedAt": "2023-05-16T16:38:47+00:00",
      "content": "The Last Ride is a true crime podcast about two young men of color who went missing in Naples, Florida nearly two decades ago after they were last seen with the same white sheriffs deputy. \r\nFelipe S… [+5708 chars]"
    },
    {
      "source": {
        "id": "time",
        "name": "Time"
      },
      "author": "Simon Shuster/Kyiv",
      "title": "Inside Ukraine's Push to Try Putin for War Crimes",
      "description": "As the war drags on and evidence of atrocities mount, Ukraine seeks international justice.",
      "url": "http://time.com/6266991/ukraine-push-putin-war-crimes/",
      "urlToImage": "https://api.time.com/wp-content/uploads/2023/03/war-crimes-tribunal-putin-ukraine-05.jpg?quality=85&w=1200&h=628&crop=1",
      "publishedAt": "2023-03-30T11:00:46Z",
      "content": "In the office of Andriy Smyrnov, the deputy head of Ukraine’s presidential administration, the wanted posters spread across the desk serve as a kind of mission statement. They show the faces of five … [+10212 chars]"
    },
    {
      "source": {
        "id": "the-jerusalem-post",
        "name": "The Jerusalem Post"
      },
      "author": null,
      "title": "Congresswoman Nita Lowey: I am proud to stand with Israel",
      "description": "Gantz: Security of Israel is above politics; PA: This is a crime.",
      "url": "https://www.jpost.com/Arab-Israeli-Conflict/Gantz-Security-of-Israel-is-above-politics-Palestinians-This-is-a-crime-607595",
      "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_Article2016_ControlFaceDetect/448812",
      "publishedAt": "2019-11-13T04:41:00Z",
      "content": "US Ambassador David M. Friedman said the US stands “with our friend and ally Israel at this critical moment” on social media on Tuesday after roughly 170 rockets were fired on Israel from the Gaza St… [+6160 chars]"
    }
  ]
  // constructor jab run karta hai jab bhi iss class ka object banta hai
  constructor() {
    super();
    console.log("constructor inside new item is running!")
    // this.state{}
    //   articles: this.articles
    //   loading: false 
    // };
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h2>Top Headlines</h2>
          <div className="row">
            <div className="col-md-4">
              <NewsItem title="aishwar" description="meenal" imageUrl="https://www.gannett-cdn.com/presto/2023/03/10/PNDN/519f01a4-3720-4a84-af8a-d3d39fb932a3-2000px-The_Last_Ride_logo_FINAL_RGB_WEB_w03-01_-_podcast_tile_copy.png?crop=1999%2C1124%2Cx1%2Cy403&width=1200"  newsUrl="todo"/>
            </div>
            <div className="col-md-4">
              <NewsItem title="aishwar" description="meenal" imageUrl="https://www.gannett-cdn.com/presto/2023/03/10/PNDN/519f01a4-3720-4a84-af8a-d3d39fb932a3-2000px-The_Last_Ride_logo_FINAL_RGB_WEB_w03-01_-_podcast_tile_copy.png?crop=1999%2C1124%2Cx1%2Cy403&width=1200" newsUrl="todo" />
            </div>
            <div className="col-md-4">
              <NewsItem title="aishwar" description="meenal" imageUrl="https://www.gannett-cdn.com/presto/2023/03/10/PNDN/519f01a4-3720-4a84-af8a-d3d39fb932a3-2000px-The_Last_Ride_logo_FINAL_RGB_WEB_w03-01_-_podcast_tile_copy.png?crop=1999%2C1124%2Cx1%2Cy403&width=1200" newsUrl="todo" />
            </div>
          </div>
        </div>
        <p>This is a new item</p>

      </>
    )
  }
}

export default News