<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <title>AJAX</title>

  <script src="https://code.jquery.com/jquery-1.10.2.js"
          type="text/javascript"></script>
  <script src="js/app-ajax.js" type="text/javascript"></script>
</head>
<body>
  <div id="wait"></div>
  <table class="table" id="matches" >

  </table>
  <div class="form-group">
    <label for="selectKind">Select kind of sport:</label>
    <select class="form-control" id="selectKind">
      <option>Football</option>
      <option>Basketball</option>
      <option>Volleyball</option>
      <option>Hockey</option>
      <option>Tennis</option>
    </select>
    <label for="selectChampionship">Select championship</label>
    <select class="form-control" id="selectChampionship">
      <option selected="selected"></option>
      <option>League of Champions</option>
      <option>Europa League</option>
      <option>Premier League</option>
      <option>LaLiga Santander</option>
      <option>League 1 Conforama</option>
      <option>Bundesliga</option>
      <option>Calcio A</option>
    </select>
  </div>

</body>
</html>
