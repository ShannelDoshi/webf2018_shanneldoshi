var quotes = [
'Practicing gratitude for what I have will make me so much happier than obsessing over the things my life is lacking.',
'I got to wake up to another new day today, and I should never take that for granted.',
'I cannot control other people, but I can always control myself.',
'Meditate, meditate, meditate.',
'Everyone else has a backstory which is just as complicated as mine, and I should remember this when I am tempted to judge someone..',
'Spend money on experiences.',
'Chasing after the validation of others will always be a losing battle.',
'I should never care if my positivity or ambition makes negative people feel uncomfortable.',
'Even if I do not believe that everything happens for a reason, I can give meaning to any situation by finding something to learn from it.',
'I will never please everyone, and that is okay.',
'Integrity and character will always be more important than power and wealth.',
'I have every right to say no if something or someone makes me feel uncomfortable or unsafe.',
'Pain is relative; it is not a competition.',
'Celebrate little victories.',
'Complaining will not fix my problems, and it will not make people feel bad for me; all it will do is hold me in place.',
'Perfection can get in the way more times than not.',
'Forgiveness will lighten my soul, and grudges will weigh it down.']


function newQuote() {
    
    var randomNumber = Math.floor(Math.random()*(quotes.length));
document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
    
}