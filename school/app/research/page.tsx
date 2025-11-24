'use client';

export default function ResearchPage() {
  return (
    <div className="research-container">
      <div className="research-content">
        <div className="research-header">
          <h1>Research: Social Media's Impact on AI Development</h1>
          <p className="research-author">By Matthew Capozzi</p>
        </div>

        <div className="research-body">
          <p>
            Artificial intelligence is no longer confined to labs and code, it lives in the public eye. From chatbots and recommendation algorithms to generative models like ChatGPT and Midjourney, AI technologies are built, tested, and judged in real time by millions of social media users. As AI tools become more visible, their developers are also exposed to constant public feedback. Platforms like X, Reddit, TikTok, and YouTube have created a new kind of accountability system, one driven not by government regulators, but by viral outrage, memes, and digital discourse. Social media has become a positive driving force in shaping AI development by acting as a public accountability system, influencing corporate behavior, and giving the public access to this technology to see how it works themselves. All from public pressure that wouldn't exist without social media. This paper explores how social media acts as both a mirror and a megaphone for AI development, shaping the pace, direction, and ethics of the field.
          </p>

          <p>
            In traditional technology development, companies answer to shareholders, customers, and regulators. But in AI, many of the biggest controversies, bias, misinformation, or unethical use were uncovered by ordinary people online. Social media gives these users a platform to document flaws, amplify voices, and demand change faster than any institutional review process could. A defining example was Microsoft's Tay chatbot in 2016. Tay was released on Twitter to learn from human interaction but quickly began tweeting racist and sexist content. Within 16 hours, Microsoft shut Tay down and issued a public apology. The shutdown wasn't due to internal testing but to the immediate viral backlash that spread across the internet. Similarly, in 2020, Twitter's image-cropping algorithm was found to favor white faces over Black faces, a discovery made by users posting comparison images. The controversy gained momentum through hashtags, leading Twitter to remove the cropping feature entirely and publicly release a bias-testing report. These cases demonstrate that social media now functions as an external quality-control mechanism. Every AI product launch faces the possibility of going viral for the wrong reasons. This environment pushes companies toward faster transparency, public testing, and internal ethics reviews that might not otherwise exist. As Cheong (2024) notes, "Transparency enables individuals to understand how AI systems make decisions that affect their lives, while accountability ensures that there are clear mechanisms for assigning responsibility and providing redress when these systems cause harm." This public exposure of flaws through social media has effectively forced AI firms to embody the transparency Cheong describes, often out of necessity rather than altruism.
          </p>

          <p>
            Beyond specific scandals, social media has shaped how the world talks about AI ethics. Online communities have made issues like algorithmic bias, data privacy, and misinformation part of mainstream conversation. Hashtags and viral threads have mobilized activists, journalists, and everyday users to hold tech companies accountable. Researchers have found that this "digital activism" plays a key role in shaping policy debates. For instance, public pressure online helped push cities like San Francisco and Boston to ban government use of facial-recognition technologies. The online discourse exposed racial and gender disparities in AI systems, forcing companies like IBM and Amazon to suspend or limit their facial-recognition programs. Without social media, these ethical discussions would likely remain within academic and policy circles. Instead, platforms like Reddit and TikTok allow a global audience to participate in shaping the moral boundaries of AI. This democratization of debate ensures that AI's development reflects not just corporate priorities, but collective social values. As IRJMETS (2024) observes, "The intersection between social media and artificial intelligence raises major ethical concerns, including manipulation, misinformation, and data privacy." Those same public concerns now shape the research and deployment choices of the world's biggest AI labs, like openai and anthropic.
          </p>

          <p>
            Another thing social media nearly forces is for big companies to open source their models. Almost every large provider including openai now allows users to download some of their models for free, and use them locally on their own machines. This has allowed the larger community to create "quantized models" that are focused on specific tasks. This has allowed for the creation of some pretty cool things like huggingface, a community like space for developers to share the different ai models they create. This hasn't been all good though. A lot of people use this technology for bad, some of the main concerns involve scammers using realtime voice models to impersonate others. Just imagine, even some teens can barely tell the difference between ai and reality, do you think your grandma would even have a chance against an ai that can nearly perfectly impersonate their grandson's voice. Larger distributors like Openai and google gemini are able to prevent some things by setting fundamental rules within the LLMs however, smaller and less restricted distributers like china's deep seek models don't have such protections and will simply act how they are told to do so. Overall, once more restrictions are in place, I believe that this arena that is ai development will in the long run make it better off due to constant iteration of models and ideas. Like Vake says, "Open-source communities have accelerated AI innovation by enabling thousands of independent researchers to test, modify, and improve models collaboratively." (Vake 2025) This is all able to happen because of the spread of information due to social media, anyone can become an AI researcher right now, the barrier to entry is literally nothing but an internet connection.
          </p>

          <p>
            Lets be real, at the end of the day, ai isn't going anywhere, it's too profitable, useful, and overall just a good product. As a society we need to limit the spread of fear mongers and misinformation on social media. This is the kind of information that will cause polarization forcing people to pick a side either with or against ai. Another problem faced with the publicity of AI and the open sourcing of the models for public use and knowledge also gets into the wrong hands or being misused. Patrick Mikalef says, "The findings indicate that negative or unintended consequences of AI can be grouped into three clusters related to (1) the nature of the work; (2) conflicts and effects; and (3) responsibility." This shows how in various different situations ai can be misused, examples for these could be doing homework with ai and using ai to create misleading videos and content. But these issues have been put on blast by social media which makes everyone skeptical but also aware.
          </p>

          <p>
            In conclusion, it's pretty clear that social media has had a huge and honestly pretty positive impact on how AI gets made. Social media acts like a giant public test environment where every new model gets stress-tested by millions of people instantly. While yes, this leads to embarrassing moments for companies, but without that pressure a lot of bias, flaws, and harmful behavior would go completely unnoticed. Social media also pushes AI companies to be way more open about what they're doing and how their models work, especially with open-source. And even though there are real risks like misinformation, deepfakes, or bad actors using open models for scams, these issues are only being caught because they're exposed online so fast. Overall, social media basically forces the AI world to evolve in the open. Even with all the chaos that comes with it, it's helping AI grow in a direction that's more transparent, more ethical, and honestly more reflective of what people want and expect out of this technology.
          </p>

          <div className="research-references">
            <h2>References</h2>
            <ul>
              <li>
                <strong>Cheong, Ben Chester.</strong> Transparency and Accountability in AI Systems: Safeguarding Well-Being in the Age of Algorithmic Decision-Making. <em>Frontiers in Human Dynamics</em>, 2024.
                <br />
                <span className="reference-note">This article explains why transparency and accountability are essential in AI development. Cheong argues that unclear AI decision-making harms social well-being and that systems must be transparent to protect society. Used to support claims about the importance of public oversight and social media as a transparency mechanism.</span>
              </li>
              <li>
                <strong>Vake, Domen, et al.</strong> Is Open Source the Future of AI? A Data-Driven Approach. <em>Applied Sciences</em>, 2025.
                <br />
                <span className="reference-note">This research analyzes open-source AI projects and concludes that community-driven improvements significantly boost model performance. Used to support the argument that online communities and open-source collaboration, encouraged by social media, are driving rapid innovation in AI.</span>
              </li>
              <li>
                <strong>GeeksforGeeks.</strong> Hugging Face and Open Source: The Impact on the AI Community, 2024.
                <br />
                <span className="reference-note">This article outlines how Hugging Face has changed the AI landscape through its open-source libraries and collaborative model hub. Used to support the section on community participation and how social platforms allow developers to share and improve AI tools.</span>
              </li>
              <li>
                <strong>RAND Corporation.</strong> The Rise of Generative AI and the Coming Era of Social Media Manipulation 3.0, 2024.
                <br />
                <span className="reference-note">This analysis explains the risks of AI-generated misinformation, warning that generative AI allows adversaries to create realistic fake content. It supports the essay's discussion of the dangers of social media amplification and misinformation.</span>
              </li>
              <li>
                <strong>Mikalef, Patrick, et al.</strong> Uncovering the Dark Side of AI-Based Decision-Making: A Case Study in a B2B Context, 2024.
                <br />
                <span className="reference-note">This case study explores harmful consequences of AI use in a real corporate environment. It highlights responsibility gaps and unintended harms, supporting the essay's discussion of risks associated with public AI misuse.</span>
              </li>
              <li>
                <strong>IRJMETS.</strong> Unpacking the Ethical Implications of AI in Social Media, 2024.
                <br />
                <span className="reference-note">This research analyzes ethical issues caused by AI within social media platforms, including manipulation, privacy concerns, and algorithmic bias. Used to support the introduction and ethical discussion sections by showing why social media's influence on AI matters.</span>
              </li>
            </ul>
          </div>

          <div className="research-footer">
            <a href="/" className="back-button">← Back to Chat</a>
          </div>
        </div>
      </div>
    </div>
  );
}

