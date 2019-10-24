<template>
      <footer class="footer">
            <div class="footer__wrap">
            <div class="footer__secondary">
                <div class="footer__inner">
                <div class="footer__region">
                    <span>Region</span>
                    <select class="footer__region__select">
                    <option value="en-US">USA</option>
                    <option value="zh-CN">China</option>
                    <option value="in">India</option>
                    </select>
                </div>
                <div class="footer__secondary__nav">
                    <span>Copyright © 2017 IMooc All Rights Reserved.</span>
                    <a href="http://us.lemall.com/us/aboutUs.html">
                    About Us
                    </a>
                    <a href="http://us.lemall.com/us/termsofUse.html">
                    Terms &amp; Conditions
                    </a>
                    <a href="http://us.lemall.com/us/privacyPolicy.html">
                    Privacy Policy
                    </a>
                </div>
                </div>
            </div>
            </div>
        </footer>
</template>
<style>
  .header {
    width: 100%;
    background-color: white;
    font-family: "moderat",sans-serif;
    font-size: 16px;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    height: 70px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 5px 20px 10px 20px;
  }
  .navbar-left-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: -20px;
  }
  .navbar-brand-logo {
    /*width: 120px;*/
  }
  .header a, .footer a {
    color: #666;
    text-decoration: none;
  }
  a {
    -webkit-transition: color .3s ease-out;
    transition: color .3s ease-out;
  }
  .navbar-right-container {
    display: none;
    justify-content: flex-start;
    align-items: center;
  }
  .navbar-menu-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
  }
  .navbar-link {
    padding-left: 15px;
  }
  .navbar-cart-container {
    position: relative;
  }
  .navbar-cart-count {
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -9px;
    right: -11px;
    width: 20px;
    border-radius: 10px;
    color: white;
    background-color: #eb767d;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  .navbar-cart-logo {
    width: 25px;
    height: 25px;
    transform: scaleX(-1);
  }
</style>
<script>
    
</script>
