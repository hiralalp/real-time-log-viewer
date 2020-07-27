from flask import Flask, render_template
from flask_socketio import SocketIO
from flask_socketio import send, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(app)




@app.route('/')
def sessions():
    return render_template('session.html')


@socketio.on('my event')
def handle_my_custom_event(data):
    emit('echo', {'data':'what ever you are trying to send'},  broadcast=True)

if __name__ == '__main__':
    socketio.run(app, debug=True)