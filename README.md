# ZAPPEЯ

Injectable script to kill popups and banners. [Install ZAPPEЯ here](https://maxwellito.github.io/zapper)

Nowadays, browsing the internet is a pain. Too many popups are blocking us form the content. News websites are a good examples, with extra large fixed top navigation that blocks a third of the screen. Of course, if you are reading this, you know how to open the web tools, find the annoying div then get rid of it. But this process is incredibly annoying. Something quick and dirty has to be made. Browser extension? No, it needs be published, people needs to install it, there's more than one browser to maintain.

So injected script was the default choice. It's not perfect, but for a hack it's fine. 

**WARNING**: Not guaranteed to work, and might not behave like expected.


## FAQ

> How do I install it on mobile?

*Forget about it. It's for desktop.*

> This script doesn't work on Facebook, why?

*I know, this is annoying, it's also one of my first motivation. The reason is simple, many websites block the script injections or loading scripts from external sources. Thankfully a lot of websites don't care much about it, giving us a a lot of freedom.*

> Why can't I drag'n'drop the shortcut to my bookmark bar in Chrome Mac?

*Dunno, leave me alone, or pick a browser that care about your privacy.*

> How the script detects elements?

*It just pick the selected element and go through the parents until it finds something fixed, relative, or absolute. It does the job most the time.*

> Ok so this script is injected at every use? Why should I trust it?

*That is right. We understand you are scared about this, or you should be. Because once this script will become popular we will add crypto libraries, inject ads, copy your cookies and resell information. Seriously, if you are scared, just fork this repo with GitHub Pages enabled, then re-add Zapper to your bookmarks.*

> Any tips?

*Yes! To kill more than one item per injection, press SPACE then click on all undesired elements.*

> Improvment planned?

*Yes, but no. If the project turns well it would be nice to make a HUGE explosion at every click. Something with DTS 5.1 sound and 4K explosion. Steven Spielberg could be available to record it, we need to sort out the budget. However having this at every click could be super annoying, so its cancelled.*

> How many popup/banners/overlays got killed with this script?

*Nobody knows. At ZAPPEЯ we care about your privacy and don't add analytics services to get stats about our users. Our hand crafted script use pure JavaScript from ES5 without extra library.*

## Contribute

Improvements and crazy ideas are welcome. 

Be aware the injected script will remain non-uglified and with comments. Any developer should be able to read and understand the code they inject in their webpage.