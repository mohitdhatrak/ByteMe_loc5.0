from surprise import accuracy, Dataset, SVD
from surprise.model_selection import KFold

# Load the movielens-100k dataset
data = Dataset.load_builtin("ml-100k")

# define a cross-validation iterator
kf = KFold(n_splits=3)

algo = SVD()


def prediction(u_id):
    for trainset, testset in kf.split(data):
        algo.fit(trainset)  
        top_5 = []
    for i in range(1682):
        x = algo.predict(str(u_id),str(i),4)
        top_5.append((x.iid,x.est))
        top_5 = sorted(top_5, key=lambda x: x[1], reverse=True)
    return top_5[:5]

fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({ message: 5 }),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
          })