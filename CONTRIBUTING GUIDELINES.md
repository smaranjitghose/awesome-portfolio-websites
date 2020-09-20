<h1 align="center"><b>GUIDELINES FOR CONTRIBUTION</b></h1> 

We want to make contributing to this project as easy and as transparent as possible, whether it's:
-> Reporting a bug :bug:<br>
-> Submitting a fix :scissors:<br>
-> Proposing new features :page_with_curl:<br>
If you wish to contribute to this project, please raise an issue and wait for the project maintainers to approve it or give feedback.

<h2 align="center"><b>Downloading Git On Windows</b></h2>
**1.** Browse to the official Git website:[here](https://git-scm.com/downloads)<br>
**2.** Click the download link for Windows and allow the download to complete.<br>
<img src="https://phoenixnap.com/kb/wp-content/uploads/2019/12/download-git-for-windows.png" width=600>
**3.** Browse to the download location (or use the download shortcut in your browser). Double-click the file to extract and launch the installer.<br>
<img src="https://phoenixnap.com/kb/wp-content/uploads/2019/12/location-git-windows-download.png" width=600>
**4.** Allow the app to make changes to your device by clicking Yes on the User Account Control dialog that opens.<br>
**5.** Review the GNU General Public License,and the installer will ask you for an installation location. Leave the default, unless you have reason to change it.<br>
**7.** Then installer will install  Git with default settings<br>

<h2 align="center"><b>How to make a Pull Request? </b></h2> 
**1.**  Fork [this](https://github.com/smaranjitghose/awesome-portfolio-websites.git) repository.
**2.**  Clone your forked copy of the project.

```
git clone --depth 1 https://github.com/<your_user_name>/awesome-portfolio-websites.git
```
   <img src="https://encrypted-tbn0.gstatic.Clone your forked copy of the projeccom/images?q=tbn%3AANd9GcT5N0HJ9db7jSvcL4dsDscZQBzqQqqKVs0BnO1OVz26glLWKJRY&usqp=CAU" width="300">
**3.** Navigate to the project directory :file_folder: .

```
cd awesome-portfolio-websites
```
**4.** Add a reference to the original repository.

```
git remote add upstream  https://github.com/smaranjitghose/awesome-portfolio-websites.git 
```

**5.** Check the remotes for his repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream master
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perfom your desired changes to the code base.

<p align="center"><img width=35% src="https://media2.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif?cid=ecf05e47pzi2rpig0vc8pjusra8hiai1b91zgiywvbubu9vu&rid=giphy.gif"></p>

**9.** Track your changes :heavy_check_mark: .

```
git add . 
```
**10.** Commit Your changes :ok: .
```
git commit -m "Relevant message"
```


**11.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on compare and pull request. Please ensure you compare your feature branch to the desired branch of the repo you are suppose to make a PR to. 

**13.** You are requested to add a short and appropriate title, reference the issue, give an elaborate description of your work and attach screenshots of the same.

   <img src="https://user-images.githubusercontent.com/41269164/70219707-47194780-176b-11ea-96c2-d0c401ddb1e0.png" width=600>

**14.** Click on `Create Pull Request`.


   <img src="https://user-images.githubusercontent.com/41269164/70219836-8d6ea680-176b-11ea-81d5-549093bf0954.png" width=600>
**15.** Voila! You have made a PR to the awesome-developer-portfolio project. Sit back patiently and relax while the project maintainers review your PR. Please understand at times the time can vary from a few hours to a few days.

<p align="center"><img scr="https://media2.giphy.com/media/rY93u9tQbybks/giphy.gif?cid=ecf05e4717631a3f454f724747f59e0cba22aa1d1f534d47&rid=giphy.gif" width=500"></p>




