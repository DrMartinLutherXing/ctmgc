from setuptools import setup

setup(
    name='ctmgc',
    version="0.1",
    author='Kieran Farrar',
    author_email='kieran.farrar@gmail.com',
    license='MIT License',
    description='Mobile Game Controller plugin for cantools (ct)',
    long_description='This is a framework for building multiplayer games played on a main display with mobile phones as controllers.',
    packages=[
        'ctmgc'
    ],
    zip_safe = False,
    install_requires = [
        "ct >= 0.8.8.3"
    ],
    entry_points = '''''',
    classifiers = [
        'Development Status :: 3 - Alpha',
        'Environment :: Console',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Topic :: Software Development :: Libraries :: Python Modules'
    ],
)
