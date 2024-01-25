import React from "react";
import ReactMarkdown from "react-markdown";

function MarkdownComponent() {
  const markdown = `
  Here is a markdown blog post about 5 beautiful places in Switzerland with images:

  # 5 Most Beautiful Places in Switzerland
  
  Switzerland is known for its stunning Alpine scenery, charming villages, and scenic lakes. Here are 5 of the most beautiful places to visit in Switzerland:
  
  ## 1. Jungfraujoch
  
  The Jungfraujoch is a mountain saddle between the Bernese Alps peaks of Jungfrau and Mönch. At 11,333 feet, it's considered the Top of Europe and offers breathtaking panoramic views of the surrounding mountains and valleys.
  
  ![Jungfraujoch](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Blick_auf_Aletschgletscher_und_Gebirge_der_Berner_Alpen.jpg/1280px-Blick_auf_Aletschgletscher_und_Gebirge_der_Berner_Alpen.jpg)
  
  ## 2. Lake Geneva
  
  Lake Geneva is a crescent-shaped lake shared between Switzerland and France. It's surrounded by the Alps and dotted with beautiful waterfront cities like Montreux.
  
  ![Lake Geneva](https://picsum.photos/id/237/200/300)
  
  ## 3. Interlaken
  
  Interlaken is a traditional Swiss town nestled between two lakes, Lake Thun and Lake Brienz. The dramatic mountain scenery is ideal for outdoor activities.
  
  ![Interlaken](-Interlaken_and_Jungfrau.jpg)
  
  ## 4. Zermatt
  
  Zermatt is a car-free village at the base of the iconic Matterhorn peak. You can take a cable car up to mountain viewpoints or ski and hike nearby. 
  
  ![Zermatt](https://picsum.photos/id/237/200/300)
  
  ## 5. Lucerne
  
  Lucerne is situated on the shores of Lake Lucerne with dramatic views of Mount Pilatus. The medieval old town is filled with historic buildings, plazas, and shops.
  
  ![Lucerne](https://picsum.photos/id/237/200/300)
  
  With breathtaking mountain scenery, charming towns, and pristine lakes, Switzerland has so many beautiful places to explore. These are just a few of the highlights.
  
  Let me know if you would like me to expand on this blog post or modify it in any way!
  `;

  return (
    <div className="markdown">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default MarkdownComponent;
