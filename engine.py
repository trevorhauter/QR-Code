import eel, os, io, pyqrcode
from base64 import b64encode

dir = os.path.dirname(os.path.realpath(__file__))


eel.init(dir)

@eel.expose
def test(param):
    print(param)
    #returns a string, then int, then float, boolean, list, dictionary
    return "string_value", 1, 1.2, True, [1, 2, 3, 4], {"name": "eel"}

@eel.expose
def generate_qr(data):
    img = pyqrcode.create(data)
    buffers = io.BytesIO()
    img.png(buffers, scale=8)
    encoded = b64encode(buffers.getvalue()).decode("ascii")
    print("QR code generation successful")
    return "data:image/png;base64, " + encoded

eel.start('index.html', size=(1016, 601), cmdline_args=['--incognito', '--no-experiments'])