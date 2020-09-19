class Error(Exception):
    pass


class SameNameError(Error):
    pass


class SameParamsError(Error):
    pass


class TypeNotExists(Error):
    pass

class LackGlobalParam(Error):
    pass
