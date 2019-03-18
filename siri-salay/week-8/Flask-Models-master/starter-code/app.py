from flask import Flask, g
from flask import render_template, flash, redirect, url_for
from forms import SubForm, PostForm
# This gains access to our models
import models

DEBUG = True
PORT = 8000

app = Flask(__name__)
app.secret_key = 'adkjfalj.adflja.dfnasdf.asd'

# Handle requests when the come in (before) and when they complete (after)
@app.before_request
def before_request():
    """Connect to the DB before each request."""
    g.db = models.DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    """Close the database connection after each request."""
    g.db.close()
    return response


# The root route will revert back to a simpler version that just returns some text
# because the get and post routes make an actual request to your 
#database, you now have a .db file.
@app.route('/', methods=['GET', 'POST'])
def index():
    #return 'Integrating models with this route. This is the return on the homepage'
    # the form variable we send down to the template needs to be added here
    form = SubForm()
    # checks if the form submission is valid
    if form.validate_on_submit():
      # if it is, we create a new Sub
      models.Sub.create(name=form.name.data.strip(), description=form.description.data.strip())

      flash("New sub registered. Called: {}".format(form.name.data))
      # and redirect to the main Sub index
      return redirect('/r')
      
    # if the submission isn't valid, send the user back to the original view
    return render_template('new_sub.html', title="New Sub", form=form)

@app.route('/r')
@app.route('/r/<sub>', methods=['GET', 'POST'])
def r(sub=None):
  if sub == None:
    subs = models.Sub.select().limit(100)
    return render_template("subs.html", subs=subs)
  else:
    # Find the right Sub
    sub_id = int(sub)
    sub = models.Sub.get(models.Sub.id == sub_id)
    posts = sub.posts
    
    # Define the form for Posts
    form = PostForm()
    if form.validate_on_submit():
      models.Post.create(
        user=form.user.data.strip(),
        title=form.title.data.strip(), 
        text=form.text.data.strip(), 
        sub=sub)
      flash("New post created")
      return redirect("/r/{}".format(sub_id))
    return render_template("sub.html", sub=sub, posts=posts, form=form)


@app.route('/posts')
@app.route('/posts/<id>')
def posts(id=None):
    if id == None:
      posts = models.Post.select().limit(100)
      return render_template('posts.html', posts=posts)
    else:
      post_id = int(id)
      post = models.Post.get(models.Post.id == post_id)
      return render_template('post.html', post=post)


if __name__ == '__main__':
    # before our app runs we initialize a connection to the models
    models.initialize()
    app.run(debug=DEBUG, port=PORT)




      
# @app.route('/r')
# @app.route('/r/<sub>', methods=['GET', 'POST'])
# def r(sub=None):
#     if sub == None:
#       #similar to the db.find (findall) in mongo
#       subs = models.Sub.select().limit(100)
#       return render_template("subs.html", subs=subs)
#     else:
#       # Find the right Sub
#       sub_id = int(sub)
#       #similar to the db.findone in mongo b/c you're specifying one resource to return
#       sub = models.Sub.get(models.Sub.id == sub_id)
#       # Send the found Sub to the template
#       return render_template("sub.html", sub=sub)

# @app.route('/')
# def index():
#     with open('subs.json') as json_data:
#         subs = json.load(json_data)
#         return render_template('subs.html', subs=subs)


# @app.route('/r')
# @app.route('/r/<sub>')
# def r(sub=None):
#     with open('subs.json') as json_data:
#         subs = json.load(json_data)
#         if sub == None:
#             return render_template('subs.html', subs=subs)
#         else:
#             sub_id = int(sub)
#             return render_template('sub.html', sub=subs[sub_id])


# @app.route('/posts')
# @app.route('/posts/<id>')
# def posts(id=None):
#     with open('posts.json') as json_data:
#         posts = json.load(json_data)
#         if id == None:
#             return render_template('posts.html', posts=posts)
#         else:
#             post_id = int(id)
#             return render_template('post.html', post=posts[post_id])



