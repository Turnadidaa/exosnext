longest_length = 0
longest_sentence = ""

while True:
    sentence = input("Enter the longest sentence you can without using the letter 'A' (or type 'q' to quit): ")
    
    if sentence.lower() == 'q':
        print("Thanks for playing!")
        break

    if 'a' in sentence.lower():
        print("Oops! Your sentence contains the letter 'A'. Try again.")
        continue

    if len(sentence) > longest_length:
        longest_length = len(sentence)
        longest_sentence = sentence
        print("🎉 Congratulations! That's your new longest sentence without 'A'!")
    else:
        print("Nice try, but that wasn't longer than your previous best.")

# exo 2

import string

paragraph = """
It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.
However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.
"""

clean_paragraph = paragraph.strip()
char_count = len(clean_paragraph)
sentence_count = sum(clean_paragraph.count(c) for c in ['.', '!', '?'])
words = clean_paragraph.split()
word_count = len(words)
words_cleaned = [word.strip(string.punctuation).lower() for word in words]
unique_words = set(words_cleaned)
unique_word_count = len(unique_words)
non_whitespace_chars = len(''.join(clean_paragraph.split()))
avg_words_per_sentence = word_count / sentence_count if sentence_count else 0
non_unique_count = word_count - unique_word_count

print("Paragraph Analysis:")
print(f"- Total characters: {char_count}")
print(f"- Total sentences: {sentence_count}")
print(f"- Total words: {word_count}")
print(f"- Unique words: {unique_word_count}")
print(f"- Non-whitespace characters: {non_whitespace_chars}")
print(f"- Average words per sentence: {avg_words_per_sentence:.2f}")
print(f"- Non-unique words: {non_unique_count}")
