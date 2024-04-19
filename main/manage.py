#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import multiprocessing


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'main.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    
    if 'runserver' in sys.argv:
        tailwind_process = multiprocessing.Process(target=watch_tailwind, args=())
        tailwind_process.start()

    execute_from_command_line(sys.argv)


# You'll want to run tailwindcss from the root of your project, so using os.system() makes sense here.
def watch_tailwind():
  os.system("./tailwindcss -i ./blissful_balance/static/css/input.css -o ./blissful_balance/static/css/output.css --watch")

if __name__ == '__main__':
    main()
