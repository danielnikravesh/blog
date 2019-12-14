---
title: March ’19 DVC❤️Heartbeat
date: 2019-03-05
description: |
  Every month we are sharing here our news, findings, interesting reads,
  community takeaways, and everything along the way.
descriptionLong: |
  Every month we are sharing here our news, findings, interesting reads,
  community takeaways, and everything along the way.
  Some of those are related to our brainchild DVC and its
  journey. The others are a collection of exciting stories and ideas centered
  around ML best practices and workflow.
picture: /uploads/post_images/2019-03-05.jpeg
author: ../authors/svetlana_grinchenko.md
tags:
  - Data Science
  - Machine Learning
  - Open Source
  - Reproducibility
  - Dvc
---

This is the very first issue of the DVC❤️Heartbeat. Every month we will be
sharing our news, findings, interesting reads, community takeaways, and
everything along the way.

Some of those are related to our brainchild [DVC ](https://dvc.org/)and its
journey. The others are a collection of exciting stories and ideas centered
around ML best practices and workflow.

## **News and links**

We read a ton of articles and posts every day and here are a few that caught our
eye. Well-written, offering a different perspective and definitely worth
checking.

- **["Data science is different now"](https://veekaybee.github.io/2019/02/13/data-science-is-different/)
  by [Vicki Boykis](https://veekaybee.github.io/)**

  <a href="https://veekaybee.github.io/2019/02/13/data-science-is-different/" class="external-link-preview">
    <section class="content-holder">
      <div class="description-holder">
        <h4 class="title">Data science is different now</h4>
        <div class="description">Woman holding a balance, Vermeer 1664 What do you think of when you read the phrase 'data science'? It's probably some…</div>
        <div class="link">veekaybee.github.io</div>
      </div>
      <div class="image-holder">
        <img src="/uploads/post_images/data-science-is-different-now.png" />
      </div>
    </section>
  </a>

  > ‘What is becoming clear is that, in the late stage of the hype cycle, data
  > science is asymptotically moving closer to engineering, and the
  > [skills that data scientists need](https://www.youtube.com/watch?v=frQeK8xo9Ls)
  > moving forward are less visualization and statistics-based, and
  > [more in line with traditional computer science curricula](https://tech.trivago.com/2018/12/03/teardown-rebuild-migrating-from-hive-to-pyspark/).’

- **[“Data Versioning”](https://emilygorcenski.com/post/data-versioning/) by
  [Emily F. Gorcenski](https://emilygorcenski.com/)**

  <a href="https://emilygorcenski.com/post/data-versioning/" class="external-link-preview">
    <section class="content-holder">
      <div class="description-holder">
        <h4 class="title">Data Versioning</h4>
        <div class="description">Productionizing machine learning/AI/data science is a challenge. Not only are the outputs of machine-learning…</div>
        <div class="link">emilygorcenski.com</div>
      </div>
      <div class="image-holder">
        <img src="/uploads/post_images/data-versioning.jpeg" />
      </div>
    </section>
  </a>

  > ‘I want to explore how the degrees of freedom in versioning machine learning
  > systems poses a unique challenge. I’ll identify four key axes on which
  > machine learning systems have a notion of version, along with some brief
  > recommendations for how to simplify this a bit.’

- **[“Reproducibility in Machine Learning”](https://blog.mi.hdm-stuttgart.de/index.php/2019/02/26/reproducibility-in-ml/)
  by [Pascal Fecht](https://blog.mi.hdm-stuttgart.de/index.php/author/pf023/)**

  <a href="https://emilygorcenski.com/post/data-versioning/" class="external-link-preview">
    <section class="content-holder">
      <div class="description-holder">
        <h4 class="title">Reproducibility in Machine Learning | Computer Science Blog</h4>
        <div class="description">The rise of Machine Learning has led to changes across all areas of computer science. From a very abstract point of…</div>
        <div class="link">blog.mi.hdm-stuttgart.de</div>
      </div>
      <div class="image-holder">
        <img src="/uploads/post_images/reproducibility-in-machine-learning.jpeg" />
      </div>
    </section>
  </a>

  > ‘…the objective of this post is not to philosophize about the dangers and
  > dark sides of AI. In fact, this post aims to work out common challenges in
  > reproducibility for machine learning and shows programming differences to
  > other areas of Computer Science. Secondly, we will see practices and
  > workflows to create a higher grade of reproducibility in machine learning
  > algorithms.’

## DVC Discord gems

There are lots of hidden gems in our Discord community discussions. Sometimes
they are scattered all over the channels and hard to track down.

We will be sifting through the issues and discussions and share the most
interesting takeaways.

- **[Edit and define DVC files manually, in a Makefile style](https://discordapp.com/channels/485586884165107732/485586884165107734/541622187296161816)**

There is no separate guide for that, but it is very straight forward. See
[DVC file format](https://dvc.org/doc/user-guide/dvc-file-format) description
for how dvc file looks inside in general. All `dvc add` or `dvc run` does is
just computing md5 fields in it, that is all. You could write your dvc file and
then run dvc repro that will run a command(if any) and compute all needed
checksums …
[read more](https://discordapp.com/channels/485586884165107732/485586884165107734/541622187296161816)

- **[Best practices to define the code dependencies](https://discordapp.com/channels/485586884165107732/485586884165107734/547424240677158915)**

…There’s a ton of code in that project, and it’s very non-trivial to define the
code dependencies for my training stage — there are a lot of imports going on,
the training code is distributed across many modules …
[read more](https://discordapp.com/channels/485586884165107732/485586884165107734/547424240677158915)

- **[Azure data lake support](https://discordapp.com/channels/485586884165107732/485586884165107734/548495589428428801)**

DVC officially only supports regular Azure blob storage. Gen1 Data Lake should
be accessible by the same interface, so configuring a regular azure remote for
dvc should work. Seems like Gen2 Data Lake
[has disable](https://discordapp.com/channels/485586884165107732/485586884165107734/550546413197590539)
blob API. If you know more details about the difference between Gen1 and Gen2,
feel free to join [our community](https://dvc.org/chat) and share this
knowledge.

- **[What licence DVC is released under](https://discordapp.com/channels/485586884165107732/485596304961962003/542390986299539459)**

Apache 2.0. One of the [most common](https://opensource.org/licenses) and
permissible OSS licences.

- **Setting up S3 compatible remote
  ([Localstack](https://discordapp.com/channels/485586884165107732/485596304961962003/543445798868746278),
  [wasabi](https://discordapp.com/channels/485586884165107732/485596304961962003/541466951474479115))**

  $ dvc remote add upstream s3://my-bucket
    $ dvc remote modify upstream
  region REGION_NAME \$ dvc remote modify upstream endpointurl <url>

Find and click the `S3 API compatible storage` on
[this page](https://dvc.org/doc/commands-reference/remote-add)

- **[Why DVC creates and updates `.gitignore` file](https://discordapp.com/channels/485586884165107732/485596304961962003/543914550173368332)**

… it adds your datafiles there, that are tracked by dvc, so that you don’t
accidentally add them to git as well you can open it with file editor of your
liking and see your data files listed there.

- **[Managing data and pipelines with DVC on HDFS](https://discordapp.com/channels/485586884165107732/485596304961962003/545562334983356426)**

… with dvc, you could connect your data sources from HDFS with your pipeline in
your local project, by simply specifying it as an external dependency. For
example let’s say your script `process.cmd` works on an input file on HDFS and
then downloads a result to your local workspace, then with DVC it could look
something like:

    $ dvc run -d hdfs://example.com/home/shared/input -d process.cmd -o output process.cmd

…
[read more](https://discordapp.com/channels/485586884165107732/485596304961962003/545562334983356426).

If you have any questions, concerns or ideas, let us know
[here](https://dvc.org/support) and our stellar team will get back to you in no
time.
