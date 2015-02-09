<%@ Page Title="" Language="C#" MasterPageFile="~/extranet/WBMasterPage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="API_WEB_DEIA.extranet.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
          <div class="crumbs">
                    <ul id="breadcrumbs" class="breadcrumb">
                        <li><i class="icon-home"></i><a href="#">Tableau de bord</a> </li>                
                    </ul>
                    <ul class="crumb-buttons">
                  
                        <li class="range"><a href="#"><i class="icon-calendar"></i><span></span><i class="icon-angle-down">
                        </i></a></li>
                    </ul>
          </div>
            <!-- /Breadcrumbs line -->
            <!--=== Page Header ===-->
            <div class="page-header">
                <div class="page-title">
                    <h3>
                        Tableau de bord</h3>
                    <span id="spanUser" runat="server"></span>
                </div>
                <!-- Page Stats -->
                <ul class="page-stats">
                    <li>
                        <div class="summary">
                            <span>Patrimoine en gestion</span>
                            <h3>
                                3869</h3>
                        </div>
                        <div class="graph circular-chart" data-percent="73">
                            73%</div>
                    </li>
                    <li>
                        <div class="summary">
                            <span>En cours d'acquisition</span>
                            <h3>
                                50</h3>
                        </div>
                        <div class="graph circular-chart" data-percent="50">
                            50</div>
                    </li>
                </ul>
                <!-- /Page Stats -->
            </div>
             <div class="row">
              <!--=== Polygon ===-->
				<div class="col-md-12">
						<div class="widget">
							<div class="widget-header">
								<h4><i class="icon-reorder"></i> Votre patrimoine</h4>

								<!-- Toolbar -->
								<div class="toolbar no-padding">
									<div class="btn-group">
										<span class="btn btn-xs widget-collapse"><i class="icon-angle-down"></i></span>
									</div>
								</div>
								<!-- /Toolbar -->
							
                                 <div id="map-canvas" class="gmaps" style="height: 100%;">
                                </div>     
                           
						</div>
					</div>
			  <!-- /Polygon -->
           </div>
           <div class="row">
                <div class="col-md-6">
                        <div class="widget box">
                            <div class="widget-header">
                                <h4>
                                    <i class="icon-reorder"></i>Audit acquisition</h4>
                                <div class="toolbar no-padding">
                                    <div class="btn-group">
                                        <span class="btn btn-xs widget-collapse"><i class="icon-angle-down"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-content no-padding">
                                <table class="table table-striped table-checkable table-hover">
                                    <thead>
                                        <tr>
                                   
                                            <th class="hidden-xs">
                                                Libelle
                                            </th>
                                       
                                            <th class="align-right">
                                                Nombre
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                   
                                            <td class="hidden-xs">
                                              Nombre Total des audits
                                            </td>
                                            <td  class="align-right">1
                                          
                                            </td>
                                         
                                        </tr>
                                        <tr>
                                       
                                            <td class="hidden-xs">
                                            En état 'Saisie'
                                            </td>
                                            <td class="align-right">
                                             0
                                            </td>
                                          
                                        </tr>
                                        <tr>                                       
                                            <td class="hidden-xs"> En état 'Validé'
                                            </td>
                                            <td class="align-right">
                                             0
                                            </td>
                                          
                                        </tr>
                                        <tr>
                                            <td class="hidden-xs">En état 'Finalisé'
                                            </td>
                                            <td class="align-right">
                                             1
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            
                            </div>
                         

                            <!-- /.row -->
                        </div>
                        <!-- /.widget-content -->
                    </div>

                <div class="col-md-6">
                        <div class="widget box">
                            <div class="widget-header">
                                <h4>
                                    <i class="icon-reorder"></i>Audit Complet</h4>
                                <div class="toolbar no-padding">
                                    <div class="btn-group">
                                        <span class="btn btn-xs widget-collapse"><i class="icon-angle-down"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-content no-padding">
                                <table class="table table-striped table-checkable table-hover">
                                    <thead>
                                        <tr>
                                   
                                            <th class="hidden-xs">
                                                Libelle
                                            </th>
                                       
                                            <th class="align-right">
                                                Nombre
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                   
                                            <td class="hidden-xs">
                                              Nombre Total des audits
                                            </td>
                                            <td class="align-right">
                                             1
                                            </td>
                                         
                                        </tr>
                                        <tr>
                                       
                                            <td class="hidden-xs">
                                            En état 'Saisie'
                                            </td>
                                            <td class="align-right">
                                             0
                                            </td>
                                          
                                        </tr>
                                        <tr>                                       
                                            <td class="hidden-xs"> En état 'Validé'
                                            </td>
                                            <td class="align-right">
                                             0
                                            </td>
                                          
                                        </tr>
                                        <tr>
                                            <td class="hidden-xs">En état 'Finalisé'
                                            </td>
                                            <td class="align-right">
                                             1
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            
                            </div>
                     
                            <!-- /.row -->
                        </div>
                        <!-- /.widget-content -->
                    </div>

                <div class="col-md-6">
                        <div class="widget box">
                            <div class="widget-header">
                                <h4>
                                    <i class="icon-reorder"></i>Energie</h4>
                                <div class="toolbar no-padding">
                                    <div class="btn-group">
                                        <span class="btn btn-xs widget-collapse"><i class="icon-angle-down"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-content no-padding">
                                <table class="table table-striped table-checkable table-hover">
                                    <thead>
                                        <tr>
                                   
                                            <th class="hidden-xs">
                                                Libelle
                                            </th>
                                       
                                            <th class="align-right">
                                                Nombre
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                   
                                            <td class="hidden-xs">
                                              Nombre total des audits energitique
                                            </td>
                                            <td class="align-right">
                                             1
                                            </td>
                                         
                                        </tr>
                                        <tr>
                                       
                                            <td class="hidden-xs">
                                            En état 'Saisie'
                                            </td>
                                            <td class="align-right">
                                             0
                                            </td>
                                          
                                        </tr>
                                        <tr>                                       
                                            <td class="hidden-xs"> En état 'Validé'
                                            </td>
                                            <td class="align-right" >
                                             0
                                            </td>
                                          
                                        </tr>
                                        <tr>
                                            <td class="hidden-xs">En état 'Finalisé'
                                            </td>
                                            <td class="align-right">
                                             1
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            
                            </div>                       
                            <!-- /.row -->
                        </div>
                        <!-- /.widget-content -->
                </div>
           </div>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="jsCall" runat="server">
</asp:Content>
