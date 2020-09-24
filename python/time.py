import time
from functools import wraps


def func_time(func):
    """
    Compute function running time
    """
    @wraps(func)
    def checkTime(*args, **kwargs):
        start_time = time.process_time()
        func(*args, **kwargs)
        end_time = time.process_time()
        print('It took ', (end_time - start_time),
              ' milliseconds to run ', func.__name__)
    return checkTime


@func_time
def long_executing_func():
    print('I am long func!')
    arr = [i for i in range(10000000)]


@func_time
def short_running_func():
    print('I am short func!')
    arr = [i for i in range(10000)]


short_running_func()
long_executing_func()
