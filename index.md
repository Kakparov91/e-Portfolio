---
layout: default
title: Kanan Akparov
---

## Machine Learning

### Jump to Section

- [Unit 1: The 4th Industrial Recolution](#unit1)
- [Unit 2: EDA Introduction](#unit2)
- [Unit 3-4: Correlation and Regression](#unit3)
- [Unit 5: Jaccard Coefficient Calculation](#unit5)
- [Unit 6: Developmental Project](#unit6)
- [Unit 7: Perceptron Activites](#unit7) 
- [Unit 8: Gradient Cost Function](#unit8) 
- [Unit 9-10: Legal and Ethical ANN Applications](#unit9)
- [Unit 11: Individual Development Project on CIFAR-10 ](#unit11)
- [Personal Reflection](#reflection)


### Learning Outcomes
- Develop and apply the skills needed to work effectively within a virtual development team, embracing practical perspectives on team roles and structure.
- Explain the legal, social, ethical, and professional challenges encountered by professionals working in machine learning.
- Evaluate the suitability and limitations of various datasets when applying machine learning algorithms.
- Use machine learning methods to tackle real-world issues and critically assess their effectiveness, especially in contexts involving technical risk and uncertainty.

### Unit 1 - 3 The 4th Industrial Revolution <a name="unit1"></a>

Through automation, big data, the Internet of Things, and artificial intelligence, the Fourth Industrial Revolution (Industry 4.0) has transformed industries, promoting efficiency and real-time decision-making across all sectors (Schwab, 2017). However, as the 2021 Colonial Pipeline ransomware assault demonstrated, this interconnectedness has also created significant weaknesses. Following a hack into its systems, Colonial Pipeline, the biggest petroleum transporter on the U.S. East Coast, was forced to shut down operations, causing flight disruptions, panic purchasing, and major fuel shortages throughout many states (Turton and Mehrotra, 2021; Zetter, 2021).

Although the total economic costs from supply chain disruptions and service delays were far greater, the corporation paid a ransom of around USD 4.4 million to regain access (FBI, 2021). Significant harm was also done to the company's reputation, which was criticized for its lack of readiness and resiliency. A move toward more stringent control of vital infrastructure was signaled by the U.S. Department of Homeland Security's introduction of new cybersecurity requirements for pipeline operators (Department of Homeland Security, 2021).

The paradox of Industry 4.0 is shown by this case: whereas digital technologies boost productivity, they also put vital systems at danger of systemic failure. To make sure that innovation is balanced with security and ethical responsibility as sectors shift to Industry 5.0, the emphasis must shift toward resilience, sustainability, and human-centered oversight (European Commission, 2021; Metcalf, 2024).



References :

Department of Homeland Security (2021) DHS Announces New Cybersecurity Requirements for Critical Pipeline Owners and Operators. Available at: https://www.dhs.gov/news/2021/05/27/dhs-announces-new-cybersecurity-requirements-critical-pipeline-owners-and-operators (Accessed: 18 August 2025).

European Commission (2021) Industry 5.0: Towards a sustainable, human-centric and resilient European industry. Brussels: European Commission.

FBI (2021) FBI Statement on Ransomware Attack Affecting Colonial Pipeline Networks. Available at: https://www.fbi.gov/news/pressrel/press-releases/fbi-statement-on-ransomware-attack-affecting-colonial-pipeline-networks (Accessed: 18 August 2025).

Metcalf, G.S. (2024) An Introduction to Industry 5.0: History, Foundations, and Futures. Singapore: Springer.

Schwab, K. (2017) The Fourth Industrial Revolution. Geneva: World Economic Forum.

Turton, W. and Mehrotra, K. (2021) Colonial Pipeline Paid Hackers Nearly $5 Million in Ransom. Bloomberg.

Zetter, K. (2021) ‘The Colonial Pipeline Hack Explained’, Wired.

### Unit 2 EDA Introduction <a name="unit3"></a>
As part of this unit, we explored the Auto-MPG dataset through exploratory data analysis (EDA). I created several visualizations, including a correlation heatmap, to gain insights into the relationships between variables. One of the key steps involved identifying missing values and examining data distribution through skewness and kurtosis. I also experimented by converting categorical features into numerical values to observe how these changes affected the results. Overall, this was a valuable introductory experience that allowed me to explore various data visualization techniques in a hands-on way. 

![Unit2HeatMap](https://github.com/Kakparov91/e-Portfolio/blob/master/assets/css/ml/kurtosis.png)
![Unit2Scat](https://github.com/Kakparov91/e-Portfolio/blob/master/assets/css/ml/matrix.png)
![Unit2Scew](https://github.com/Kakparov91/e-Portfolio/blob/master/assets/css/ml/mpg_weight.png)
![Unit2Scew](https://github.com/Kakparov91/e-Portfolio/blob/master/assets/css/ml/swekness.png)

### Unit 3-4 Correlation and Regression <a name="unit3"></a>
In this unit, we deepened our understanding of different regression techniques, including Linear, Multiple Linear, Polynomial, and Pearson Correlation. Working with Jupyter Notebooks, we adjusted various parameters to observe how these changes impacted both regression results and data correlations. I initially found these exercises quite challenging, often mixing up the different methods and questioning my grasp of the concepts. However, the visual outputs from our experiments played a key role in reinforcing my learning and clarifying the distinctions between the techniques.

![Unit3Linear1](https://github.com/Kakparov91/e-Portfolio/blob/master/assets/css/ml/pear.png)
![Unit3Linear2](https://github.com/Kakparov91/e-Portfolio/blob/master/assets/css/ml/pearson.png)

![Unit3Pearson1](https://github.com/Kakparov91/e-Portfolio/blob/master/assets/css/ml/poly.png)
![Unit3Pearson2](https://github.com/Kakparov91/e-Portfolio/blob/master/assets/css/ml/poly1.png)

### Unit 5 Jaccard Coefficient Calculation  <a name="unit5"></a>
In Unit 5, we explored how to compute the Jaccard Coefficient. 

<img width="559" alt="Unit6Jac" src="https://github.com/Kakparov91/e-Portfolio/blob/master/assets/css/ml/Jaccard.png" />

## Unit 6 Development Team Project  <a name="unit6"></a>
In this unit, we focused on submitting our Development Team Project, which required us to produce a detailed data analysis report and conduct peer reviews of our teammates. Throughout this project, I found myself stepping up more — taking the initiative to schedule meetings and assume a leadership role within the group.
One of the key lessons I learned was the importance of maintaining confidence during team discussions and keeping an open mind instead of clinging to what I personally viewed as the best solution. My strongest contributions were my writing abilities and cooperative attitude, which proved especially useful during the report writing and summarization stages.
Our team functioned best during discussions where we set practical goals and divided tasks fairly within achievable time frames. However, a recurring weakness was a general sense of pessimism about the project’s difficulty — something I personally disagreed with, as I found the workload quite manageable.

The link to our report can be found here: [Project Report](https://github.com/Kakparov91/e-Portfolio/blob/master/assets/css/ml/unit6-Airbnb%20in%20New%20York%20City%20%20A%20Data%20Driven%20Analysis%20of%20Pricing%20Location%2C%20and%20Market%20Segmentation.pdf)


## Unit 7 Perceptron Activites <a name="unit7"></a>

In this unit, we applied our newly gained understanding of the Perceptron to experiment with how adjusting input values and weights can trigger neuron activation. However, when the inputs stay constant and only the weights are altered, the neuron fails to activate.

## Unit 8 Gradient Cost Function <a name="unit8"></a>

We focused on an exercise designed to identify the minimum cost while achieving it with the least number of iterations possible. This task helped us better understand the optimization process in machine learning models

## Unit 9 - 10 Legal and Ethical ANN Applications <a name="unit9"></a>

Over the past decade the adoption of artificial intelligence (AI) has increased at an exponential pace. Its integration across industries has delivered significant benefits, from improving customer experiences to enhancing medical diagnostics. The energy sector is applying AI to boost operational efficiency, while the banking industry uses it to strengthen fraud detection and overall security (Google Cloud, 2024).
Despite these advantages, the growing use of AI also raises ethical and regulatory concerns. One of the most pressing issues is the lack of transparency in AI training data, which creates uncertainty and potential bias in decision-making systems (Council of the European Union, 2024). Poorly curated or uncleaned datasets can lead to inaccurate, unfair, or even harmful outcomes — issues that become increasingly problematic in the absence of strong governance and safeguards (Tartaro, Smith and Shaw, 2023).
As AI technologies continue to shape everyday life and transform industries, the question of accountability becomes more urgent. Policymakers and international bodies now face the challenge of determining where AI should be deployed responsibly and where its use may be inappropriate or risky (European Parliament, 2020).

Reference List (Harvard Style)
Council of the European Union (2024) Benefits and Risks of AI. Available at: https://www.consilium.europa.eu/en/policies/benefits-and-risks-of-ai/ (Accessed: 19 October 2025).
European Parliament (2020) Artificial intelligence: threats and opportunities. Available at: https://www.europarl.europa.eu/topics/en/article/20200918STO87404/artificial-intelligence-threats-and-opportunities (Accessed: 19 October 2025).
Google Cloud (2024) Generative AI – Deploy an AI application using Google Cloud. Available at: https://cloud.google.com/solutions/generative-ai (Accessed: 19 October 2025).
Tartaro, A., Smith, A.L. and Shaw, P. (2023) ‘Assessing the impact of regulations and standards on innovation in the field of AI’, arXiv preprint. Available at: https://arxiv.org/abs/2302.04110 (Accessed: 19 October 2025).


## Unit 11 Individual Development Project on CIFAR-10 <a name="unit11"></a>
This unit focused on an individual development project.

A full presentation is available here: <a href="https://github.com/Kakparov91/e-Portfolio/blob/master/assets/css/ml/unit%2011-Presentation.pdf" target="_blank">NN Presentation</a>

A transcript of the video presentation on the project slides is available here: [Transcript_Akparov.docx](https://github.com/Kakparov91/e-Portfolio/blob/master/assets/css/ml/unit%2011-Word%20transcript%20project.docx)
Python code is available here: <a href="https://github.com/Kakparov91/e-Portfolio/blob/master/assets/css/ml/unit%2011-Kanan%20Akparov%20python%20file.ipynb" target="_blank">NN Presentation</a>


## Individual Reflection <a name="reflection"></a>

  Starting this module was exciting, as I had only recently begun playing around with what could be done with large language models such as DeepSeek and ChatGPT. The latter two intrigued me and opened my eyes to how much can be done with machine learning in real-world applications. I couldn't wait to move past using AI and understanding how it works. The first three units were excellent at establishing the ground rules of machine learning, providing us with a solid base in vocabulary, concepts, and history. I especially enjoyed how early on we were taught about the ethical implications of machine learning. Having both the risks and possibilities that come with this type of powerful technology seemed essential, and these discussions brought up crucial questions of responsibility, bias, and long-term impact.
  
  Discovering how errors in model training or algorithm conception could snowball into significant real-world consequences opened my eyes. For instance, a seemingly tiny bias in the data could spiral into discriminatory practices on a mass scale. These kinds of conversations made the subject feel real and relevant—like we weren't just learning about a technical subject, but acquiring a skillset that could shape, help, or harm people depending on how it was applied. It provided the work with a sense of ethical importance that I hadn't expected to approach the course with.
The course truly came to life for me when we progressed into Units 2 to 5, where we learned practical skills like data preprocessing and exploratory data analysis (EDA). These techniques were used to bridge the gap between raw data and meaningful insight. It was within these units that I felt the tangible benefit of what we were doing—detecting patterns, cleaning dirty datasets, and preparing data for analysis. While I completed the exercises given with some success, I soon realized how much more complexity there was to learn. For instance, I struggled to balance full preprocessing with the risk of unintentionally distorting or skewing the dataset.

  Regression and parameter tuning in Units 3 and 4 had a steep learning curve. The terminology grew more technical, and the reading material took on a more mathematical and statistical basis than I originally possessed. I began to lose some confidence, wondering if I was truly suited for this profession. But I used this as a challenge and devoted additional time to reviewing lectures, reading additional materials, and participating in online forums and communities to solidify my knowledge. Over time, things that at first seemed intimidating—like the impact of making a small change in regularization or how a model was sensitive to specific sets of parameters—slowly became more understandable.

  Unit 5 dealt with unsupervised learning and clustering, and this quite unexpectedly turned out to be one of the module's highlights for me. Learning about clustering data with algorithms like K-means and measuring results with Jaccard coefficients felt like science fiction. It was as if I could now begin to see the structure in data that had previously appeared to be random. Mathematical ideas of clustering were challenging, and I struggled with some of my personal math-related anxieties. All that aside, I was pleased with how far I was able to come in seeing the practical applications of these methods in the real world and how they could be applied, say, to marketing segmentation or anomaly detection.

  Unit 6 was comprised of our group project, which was one of the more complicated experiences of the course, not only intellectually, but socially. Although we turned out to produce a well-deserved project, it was difficult to work with certain team members due to poor teamwork and communication. I volunteered to write the final project report and was appalled when I found that some of my work was being erased without any regard. This generated a lot of tension and frustration. Although the issue was never actually resolved, the experience also provided me with lessons in teamwork, boundaries, and how essential respectful communication is in a working environment. Through the interpersonal failures, I also learned a great deal from the dataset we worked on and gained practical experience utilizing the tools and concepts of earlier units.

  The following two units, Units 7 and 8, dealt with artificial neural networks (ANNs) and the mathematics of multilayer perceptrons. I began to feel the weight of my own expectations during these weeks. I wanted to learn everything at the speed of light, but again, the learning curve was too much for me. Fortunately, the hands-on experiments with perceptrons brought a sense of clarity, making the basic concepts concrete by trying them out. Again, there was the question of ethics at issue—this time in terms of the application of ANN to use in predictive policing and medicine. I enjoyed seeing these debates discussed, as it challenged us to not only discuss how a model works, but whether it should work at all.
Unit 9, on facial recognition technology, was arguably the most impactful personally of the entire course. I had already been amazed by the ease of facial recognition use in everyday life, such as my phone unlocking itself. But this unit opened my eyes to the broader implications—surveillance, privacy invasion, racial profiling, and potential misuse by authorities. It was a tension between my prior experience and new learning, and it altered my perspective significantly.

  Units 10 and 11 covered model evaluation and performance tuning. These were applied to our final individual development project, where we were required to design, train, and tune an object detection model using the CIFAR-10 dataset. For testing purposes, I decided against using pre-trained models but built mine from the ground up. It required many iterations and careful parameter fine-tuning after many iterations for me to ultimately reach an accuracy level of 86% while keeping overfitting to a minimum. It was a very personal achievement, one that was something of a watershed moment when everything learned in preceding modules came together in something I had built myself and could professionally critique.
As we came to the final unit, I was increasingly interested to find out where the trend for machine learning was heading. I began to read research papers and articles on future trends, from reinforcement learning to AI ethics for generative AI. The latter half of the module was reflective for me. I began to ask not only what I had been studying, but how I might continue to move forward on my own through personal projects, experiments, and further reading.

  In conclusion, this module has offered far more than just technical knowledge. It has pushed me to reflect critically, collaborate under pressure, and develop resilience in the face of self-doubt. I’ve gained a foundational skill set in model development, evaluation, and ethical awareness. But I’ve also realized the importance of lifelong learning in this ever-evolving field. In the future, I will keep building projects for my portfolio, practice my data visualization, and take a refresher mathematics course to solidify my knowledge. I'm looking forward to the future, not only of machine learning, but of where I fit in it.


