from bs4 import BeautifulSoup

# Read in the contents of the "Book.htm" file
with open('Book.htm', 'r') as f:
    html_doc = f.read()

# Use BeautifulSoup to extract all the links from the HTML document
soup = BeautifulSoup(html_doc, 'html.parser')
links = soup.find_all('a')

# Write the extracted links to a new file called "urls.txt"
with open('urls.txt', 'w') as f:
    for link in links:
        url = link.get('href')
        if url:
            f.write(url + '\n')