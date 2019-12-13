---
title: "Data Version Control beta release: iterative machine learning"
date: 2017-05-04
description: |
  Description
descriptionLong: |
  Long description
author: ../authors/dmitry_petrov.md
commentsUrl: https://discuss.dvc.org/t/how-and-where-install-dvc/126
tags:
  - Open Source
  - Machine Learning
  - Data Science
  - Version Control
  - AI
---

# Data Version Control beta release: iterative machine learning

UPDATE: This blog post uses outdated DVC release 0.8. New tutorial — [Data Version Control Tutorial](https://blog.dataversioncontrol.com/data-version-control-tutorial-9146715eda46). New project web site: [dvc.org](https://dvc.org/).

It is hardly possible in real life to develop a good machine learning model in a single pass. ML modeling is an iterative process and it is extremely important to keep track of your steps, dependencies between the steps, dependencies between your code and data files and all code running arguments. This becomes even more important and complicated in a team environment where data scientists’ collaboration takes a serious amount of the team’s effort.

![](https://cdn-images-1.medium.com/max/3800/1*WjXHRFcFT--7jPRWJ9Q5Ww.jpeg)

Today, we are pleased to announce the beta version release of new open source tool — [data version control](https://dataversioncontrol.com/) or DVC. DVC is designed to help data scientists keep track of their ML processes and file dependencies in the simple form of git-like commands: “**dvc run python train_model.py data/train_matrix.p data/model.p**”. Your existing ML processes can be easily transformed into reproducible DVC pipelines regardless of which programming language or tool was used.

This blog post walks you through an iterative process of building a machine learning model with DVC using [stackoverflow posts dataset](https://blog.dataversioncontrol.com/r/?url=https%3A%2F%2Farchive.org%2Fdetails%2Fstackexchange). First, you should initialize a Git repository and download a modeling source code that we will be using to show DVC in action.

NOTE. THIS IS AN OUTDATED CODE FOR OLD DVC VERSION - 0.8. FOR NEWER DVC PLEASE USE CODE FROM [THE NEW TUTORIAL](https://blog.dataversioncontrol.com/data-version-control-tutorial-9146715eda46).

<iframe src="https://medium.com/media/3e0608d9dbced951b1891a63cf43a795" frameborder=0></iframe>

The full pipeline could be built by running the bash code below. If you use Python version 3, please replace python to python3 and pip to pip3.

<iframe src="https://medium.com/media/49aab320b33193740243e0b49018f2f7" frameborder=0></iframe>

The one thing to wrap your head around is that DVC automatically derives the dependencies between the steps and builds the dependency graph ([DAG](https://blog.dataversioncontrol.com/r/?url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDirected_acyclic_graph)) transparently to the user. This graph is used for reproducing parts of your pipeline which were affected by recent changes. In the next code sample we are changing feature extraction step of the pipeline and reproduce the final result. DVC derives that only three steps out of seven need to be rebuilt and runs these steps:

<iframe src="https://medium.com/media/ac0662089a7d291bf8a4b687df4ba7da" frameborder=0></iframe>

If you replace the input file that affects all the steps, then the entire pipeline will be reproduced.

<iframe src="https://medium.com/media/9f8d1f51c963e1d08eff508eecb29cd5" frameborder=0></iframe>

Not only can DVC streamline your work into a single, reproducible environment, it also makes it easy to share this environment by Git including the dependencies (DAG) — an exciting collaboration feature which gives the ability to reproduce the research results in different computers. Moreover, you can share your data files through cloud storage services like AWS S3 or GCP Storage since DVC does not push data files to Git repositories.

![](https://cdn-images-1.medium.com/max/2048/1*jXSDrldq1-pcaB7ms8q5hw.jpeg)

The code below shows how to share your code and DAG through the Git and data files through S3:

<iframe src="https://medium.com/media/5dfcdb14733257779ed9dbe564ae8d4c" frameborder=0></iframe>

Now, another data scientist can use this repository and reproduce the data files the same way you just did. If she doesn’t want (or has not enough computational resources) to reproduce everything, she can sync and lock shared data files. After that, only the last steps of the ML process will be reproduced.

<iframe src="https://medium.com/media/e3f2e1966defb99292c3bbaaaf28ebc7" frameborder=0></iframe>

The steps that were reproduced (red):

![](https://cdn-images-1.medium.com/max/3766/1*dQnhQh-rGNwQABwftPoYOw.png)

## Conclusion

Thus, the model can be improved iteratively and DVC simplifies the iterative ML process and aids collaboration between data scientists.

We are very interested in your opinion and feedback. Please post your comments here or contact us in twitter — [FullStackML](https://twitter.com/FullStackML).

If you found this tool useful,** please “star” the [DVC Github repository](https://github.com/iterative/dvc)**.
