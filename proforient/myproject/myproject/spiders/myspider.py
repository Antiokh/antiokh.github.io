import scrapy

class MySpider(scrapy.Spider):
    name = 'myspider'
    
    def start_requests(self):
        with open('urls.txt', 'r') as f:
            for url in f:
                yield scrapy.Request(url=url.strip(), callback=self.parse)

    def parse(self, response):
        blocks = response.xpath('//span[@class="badge"]')
        for block in blocks:
            block_title = block.xpath('./following-sibling::text()[1]').get().strip()
            rows = block.xpath('./following-sibling::table[1]//tr')
            for row in rows:
                label = row.xpath('.//th[@class="apr-label"]/text()')
                if label:
                    label = label.get().strip()
                    value = row.xpath('.//td[@class="apr-general-data"]/text()')
                    if value:
                        value = value.get().strip()
                        yield {block_title: {label: value}}