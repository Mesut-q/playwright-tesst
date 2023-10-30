const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Web sayfasını aç
  await page.goto('https://example.com'); // Giriş yapılacak web sayfasının URL'sini buraya ekleyin.

  // Kullanıcı adı ve şifre inputlarını tanımlayın ve doldurun
  const usernameInput = await page.$('#username'); // Kullanıcı adı inputunun CSS veya XPath selektörünü kullanın
  const passwordInput = await page.$('#password'); // Şifre inputunun CSS veya XPath selektörünü kullanın

  await usernameInput.type('kullanici1'); // Kullanıcı adını doldurun
  await passwordInput.type('sifre1'); // Şifreyi doldurun

  // Giriş yap butonunu tıklayın
  const loginButton = await page.$('#loginButton'); // Giriş yap butonunun CSS veya XPath selektörünü kullanın
  await loginButton.click();

  // Sayfanın yüklenmesini bekleyin (örneğin, oturum açma sonucu)
  await page.waitForNavigation();

  // Oturumu kontrol etmek için sayfa üzerinde bir öğeyi arayabilirsiniz
  const welcomeMessage = await page.textContent('#welcomeMessage'); // Hoş geldiniz mesajının CSS veya XPath selektörünü kullanın

  console.log(welcomeMessage); // Hoş geldiniz mesajını konsola yazdırın

  // Tarayıcıyı kapat
  await browser.close();
})();