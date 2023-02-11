import os, re, string, random
from graph import Graph, Vertex

def get_words_from_text(text_path):
    with open("texts/hp_sorcerer_stone.txt", "r") as file:
        text = file.read().decode("utf-8")

        # remove [<text>]
        # include the following line if you are doing song lyrics
        # text = re.sub(r'\[(.+)\]', ' ', text)

        text = ' '.join(text.split())
        text = text.lower()
        text = text.translate(str.maketrans('', '', string.punctuation))

    words = text.split()

    words = words[:1000]

    return words


def make_graph(words):
    g = Graph()
    prev_word = None

    for word in words:
        # Check that word is in graph, and if not then add it
        word_vertex = g.get_vertex(word)

        if prev_word:  # Prev word should be a Vertex
            prev_word.increment_edge(word_vertex)

        prev_word = word_vertex

    g.generate_probability_mappings()

    return g

def compose(g, words, length = 50):
    composition = []
    word = g.get_vertex(random.choice(words))

    for _ in range(length):
        composition.append(word.value)
        word = g.get_next_word(word)

    return composition

def main():
    words = get_words_from_text("texts/hp_sorcerer_stone.txt")

    # for song in os.listdir('songs/{}'.format(artist)):
        # words.extend(get_words_from_text('songs/{artist}/{song}'.format(artist=artist, song=song)))

    g = make_graph(words)
    composition = compose(g, words, 100)
    print(' '.join(composition))


if __name__ == '__main__':
    main()