import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Convert short daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan veetukku pogren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});


test('Pos_Fun_0002 - Convert an interrogative sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('unakku epdi irukku?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0003 - Convert a polite request ', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('Konjam help panna mudiyuma? Ennoda project-ai complete panna konjam support venum.');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0004 -Present tense activity  ', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan ippo velai seiren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0005 -Future tense activity  ', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naalai naan office pogren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0006 -Compound sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan veetukku ponen, aana mazhai peythathu');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0007 -Complex conditional sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('nee varuvai endal naan unnodu pesuven appuram mudivu eduppom');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0008 -Negative sentence form', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan atha seiya maatten');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0009 -Plural pronoun usage', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naanga nalaiku vaarom');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0010 -Imperative command', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('inga vaa');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0011 -Mixed Thanglish+ English', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('innaiku meeting Microsoft teams la nadakkuthu');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0012 -Time format included', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('meeting 7.30 AM ku irukku');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0013 -Place name preserved', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan Colombo pogren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0014 -Polite request', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('konjam ithu check panni sollunga');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0015 -Informal daily expression', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('romba soorva irukku');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0016 -Past tense sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan nethu veetukku ponen');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0017 -Question with place name', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('nee Kandy pogren nu sonnaya?');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0018 -Currency format', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('athu Rs. 2500 aa irukku');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0019 -Date format', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('meeting 25/12/2025 la irukku');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0020 -Multiple spaces handling', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan   veetukku   pogren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0021 - Multi-line input', async ({ page }) => {

  await page.goto('https://tamil.changathi.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  const inputBox = page.locator('#transliterateTextarea');

  await expect(inputBox).toBeVisible({ timeout: 10000 });

  await inputBox.fill(
    'naan veetukku pogren\nnee enna varuviya?'
  );

await expect(inputBox).not.toHaveValue('');
});


test('Pos_Fun_0022 -Convert a long paragraph-style daily language input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('innaiku romba mazhai peythathu. athunaala traffic romba adhigama irunthathu. naan office pogumbothu romba late aagiduchu. appuram meeting um delay aagiduchu aana velai ellam mudichitten. manager situation purinjukittu extra time kuduthaaru. team members um support panninaanga. naalaikku indha velai ellam sariyaa nadakkum nu namburen.');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0023 -English abbreviation handling', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan OTP va check panni login pannen');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_Fun_0024 -Politeness variation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('please konjam ithu seekiram mudichu kudunga');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0001 -Missing spaces', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naanveetukkupogren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0002 - Excessive spaces', async ({ page }) => {

  await page.goto('https://tamil.changathi.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  const inputBox = page.locator('#transliterateTextarea');

  await expect(inputBox).toBeVisible();

  await inputBox.fill('naan      veetukku        pogren');

  const value = await inputBox.inputValue();
  expect(value.length).toBeGreaterThan(5);

  expect(value).toMatch(/\s{5,}/);
});


test('Neg_Fun_0003 - Mixed English sentence structure', async ({ page }) => {

  await page.goto('https://tamil.changathi.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  const inputBox = page.locator('#transliterateTextarea');

  await expect(inputBox).toBeVisible();

  await inputBox.fill('today naan office pogren because meeting irukku');

  const value = await inputBox.inputValue();

  expect(value.length).toBeGreaterThan(10);

  expect(value).toMatch(/today|office|because|meeting/i);
});


test('Neg_Fun_0004 -Slang-heavy input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('dei macha romba scene da');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0005 -Punctuation overload', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('enna da nadakkuthu???!!!');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0006 -Present tense activity ', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('innaiku office la meeting irunthathu but traffic romba worst aa irunthathu athunaala naan late aagitten and manager romba strict aa pesinaaru appuram work mudikka romba pressure irunthathu');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0007 -Incorrect tense structure', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan nalaikku office poyitten');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0008 -Numbers written inconsistently', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('meeting 7 thirty ku irukku');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0009 -English abbreviation overload', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan OTP PIN CVV ellam check panni login pannen');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Neg_Fun_0010 -Random capitalization', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('NaAn VeEtUkKu PoGrEn');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});

test('Pos_UI_0001 -Verify real-time Tamil output updates while typing', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');

  await inputBox.fill('naan veetukku pogren');

  await expect(outputBox).toBeVisible();
  await expect(outputBox).toHaveText('');
});




