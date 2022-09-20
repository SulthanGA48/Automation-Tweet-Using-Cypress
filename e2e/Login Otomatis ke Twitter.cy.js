describe('Otomatis login ke website Twitter', () => {
  it('Membuka page Homepage Twitter', () => {
    cy.visit('https://twitter.com/i/flow/login');

    const text1 = cy.get("h1[data-testid='ocfSettingsListPrimaryText']"); 
    text1.contains("Sign in to Twitter");
    text1.should("have.css", "color", "rgb(231, 233, 234)");

  });
  
  it('Memasukkan Email pada kolom email', () => {
    //Memeriksa attribut kotak input email
    const emailPH = cy.get("div[class='css-901oao css-1hf3ou5 r-37j5jr r-1inkyih r-16dba41 r-135wba7 r-bcqeeo r-1pn2ns4 r-95jzfe r-13f91hp r-lrvibr r-qvutc0']");
    emailPH.contains("Phone, email, or username"); 
    emailPH.should("have.css", "color", "rgb(113, 118, 123)");
    
    //Memasukkan email pada kotak input email
    const email = cy.get("input[name='text']");
    email.type("*MASUKKAN EMAIL DI SINI*");

    //Memeriksa attribut tombol "Next" & Menekan tombol "Next"
    const tombol = cy.get("div[class='css-18t94o4 css-1dbjc4n r-sdzlij r-1phboty r-rs99b7 r-ywje51 r-usiww2 r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr r-13qz1uu']");
    tombol.should("be.visible");
    tombol.should("have.css", "color", "rgb(0, 0, 0)");
    tombol.should("have.css", "background-color", "rgb(239, 243, 244)");
    tombol.contains("Next");
    tombol.click({ multiple: true});
    });
      
  it('Memasukkan nomor Ponsel atau Nama Pengguna untuk verifikasi (apabila twitter meminta verifikasi nomor handphone)', () => {
    //Memeriksa attribut pada page verifikasi Nomor ponsel atau nama pengguna
    const veriftext = cy.get("h1[id='modal-header']");
    veriftext.contains("Enter your phone number or username");
    veriftext.should("have.css", "color", "rgb(231, 233, 234)");

    const veriftext2 = cy.get("span[class='css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0']");
    veriftext2.contains("There was unusual login activity on your account. To help keep your account safe, please enter your phone number or username to verify it’s you.");

    //Verifikasi placeholder pada kotak input "Ponsel atau nama pengguna"
    const verifPH2 = cy.get("span[class='css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0']");
    verifPH2.contains("Phone or username");
    verifPH2.should("have.css", "color", "rgb(29, 155, 240)");


    //verifikasi ponsel atau nama pengguna
    const verif = cy.get("input[name='text']");
    verif.type("*MASUKKAN NOMOR HAPE DI SINI*");

    //Memeriksa attribut tombol "Next" & Menekan tombol "Next"
    const tombol3 = cy.get("div[data-testid='ocfEnterTextNextButton']");
    tombol3.should("be.visible");
    tombol3.should("have.css", "color", "rgb(0, 0, 0)");
    tombol3.should("have.css", "background-color", "rgb(239, 243, 244)");
    tombol3.contains("Next");
    tombol3.click({ multiple: true});
  });

  it('Memasukkan password pada kolom password', () => {
    //Memasukkan password
    const passw = cy.get("input[name='password']");
    passw.type("*MASUKKAN PASSWORD DI SINI");

    const tombol2 = cy.get("div[data-testid='LoginForm_Login_Button']");
    tombol2.click({multiple: true});
  }); 

  it('Melakukan Tweet secara otomatis', () => {
    cy.get('.public-DraftStyleDefault-block').click().type('Testing Automation Tweet!! Number 2');
    cy.get('[data-testid=tweetButtonInline]').click();
  });

  it('Melakukan Tweet secara otomatis (Menggunakan type kode lain)', () => {
    const tweet = cy.get("div[class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']");
    tweet.type("Tweet secara otomatis menggunakan cypress");

    const tombtweet = cy.get("div[data-testid='tweetButtonInline']");
    tombtweet.click();
  });
});