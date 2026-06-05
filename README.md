🖋️ Hamilton Data-Vis: The Narrative in Numbers

"Who lives, who dies, who tells your story?" — Now, the data does.

🎭 The Concept

Hamilton is a masterpiece of lyrical density, running at a staggering 144 words per minute. But what does that velocity look like? How does character emotion map across a scatter plot?

Hamilton Data-Vis is an open-source, friction-free interactive dashboard that transforms the complex narrative and rapid-fire libretto of the musical into immediate, beautiful visual insights.

Built with a strict Nordic design philosophy (minimalist, high-contrast, clean typography), this project strips away the noise to reveal the underlying architecture of the masterpiece.

⚡ Why This Exists (The ROI)

Deep Comprehension: Makes the hyper-complex metric and emotional shifts of the musical instantly digestible.

Frictionless Open Source: Zero complex backend servers. No SQL databases. It runs entirely in the browser using flat files (JSON/CSV).

Fork & Play: Anyone can fork this repo, drop a new .json data file into the /public folder, and watch the narrative rebuild itself.

🛠️ Tech Stack (The Engine)

Core: Next.js (React) - For lightning-fast static site generation.

Styling: Tailwind CSS - Clean, responsive, and maintainable utility classes.

Visualization: Recharts / D3.js - Beautiful, declarative charts.

Deployment: Ready for Vercel or GitHub Pages (Push to deploy).

🚀 Quick Start: Run the Revolution

You don't need to be Alexander Hamilton to set this up.

Clone the repo:

git clone https://github.com/yourusername/hamilton-datavis.git
cd hamilton-datavis


Install the dependencies:

npm install
# or yarn install / pnpm install


Start the development server:

npm run dev


Open the room where it happens:
Navigate to http://localhost:3000 in your browser.

📊 The Data Model (Flat & Easy)

We believe in keeping data accessible. The entire data engine is driven by a single file: /public/data/hamilton_data.json.

Sample Structure:

[
  {
    "character": "Hamilton",
    "song": "My Shot",
    "act": 1,
    "wordsPerMinute": 160,
    "emotion": "Ambitious",
    "sentimentScore": 0.8
  }
]


Want to analyze Les Misérables instead? Just swap the JSON.

🤝 Contributing (Join the Ensemble)

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Let's build something that outlives us.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📜 License

Distributed under the MIT License. See LICENSE for more information.

“There's a million things I haven't done, but just you wait.”
