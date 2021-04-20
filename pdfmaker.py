import pdfkit

options = {
    'color' : 'white',
    'encoding': "UTF-8",
    'size' : 'A7',
    'no-outline': None
}
path_wkhtmltopdf = r"C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe"
config = pdfkit.configuration(wkhtmltopdf=path_wkhtmltopdf)
pdfkit.from_url('http://haki-malai.github.io/cv', 'micro.pdf' , options=options, configuration=config,)